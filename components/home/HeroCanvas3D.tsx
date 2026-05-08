"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

export default function HeroCanvas3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isXl, setIsXl] = useState(false);

  useEffect(() => {
    const check = () => setIsXl(window.innerWidth >= 1280);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!isXl) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ── Renderer ──────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight, false);
    renderer.setClearColor(0x0c263f, 1);
    renderer.toneMapping = THREE.NoToneMapping;
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

    // ── Scene + Camera ─────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      canvas.offsetWidth / canvas.offsetHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 6);

    // ── Environment map (drives transmission refraction) ───────────────────────
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const roomEnv = new RoomEnvironment();
    const envTexture = pmremGenerator.fromScene(roomEnv).texture;
    scene.environment = envTexture;
    pmremGenerator.dispose();
    roomEnv.dispose();

    // ── Geometric globe — IcosahedronGeometry detail=1 ────────────────────────
    // 20 triangular faces: evokes data, structure and mathematical precision
    const geometry = new THREE.IcosahedronGeometry(1.4, 1);
    const originalPositions = new Float32Array(geometry.attributes.position.array);

    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#0C263F"),
      metalness: 0.1,
      roughness: 0.0,
      transmission: 0.9,
      thickness: 2.0,
      ior: 2.4,
      envMapIntensity: 2.5,
      clearcoat: 1.0,
      clearcoatRoughness: 0.0,
      iridescence: 0.6,
      iridescenceIOR: 1.8,
    });

    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // ── Counter-rotating wireframe cage ───────────────────────────────────────
    const wireGeometry = new THREE.IcosahedronGeometry(1.4 * 1.15, 1);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#ffffff"),
      opacity: 0.08,
      transparent: true,
      wireframe: true,
    });
    const wire = new THREE.Mesh(wireGeometry, wireMaterial);
    scene.add(wire);

    // ── Lighting — brand palette ──────────────────────────────────────────────
    const ambient = new THREE.AmbientLight(0x0c263f, 0.3);
    scene.add(ambient);

    // Steel blue primary — orbits the globe to create the sweeping highlight
    const lightA = new THREE.PointLight(0x4a789e, 10, 10);
    lightA.position.set(3, 3, 3);
    scene.add(lightA);

    // Warm taupe fill from below — gives depth and warmth against the navy crystal
    const lightB = new THREE.PointLight(0xa89b8c, 6, 8);
    lightB.position.set(-3, -2, 2);
    scene.add(lightB);

    // White rim — catches the icosahedron edges
    const lightC = new THREE.PointLight(0xffffff, 2, 6);
    lightC.position.set(0, 4, 1);
    scene.add(lightC);

    // Steel blue spotlight — the column of light that sweeps as the globe turns
    const spot = new THREE.SpotLight(0x4a789e, 12);
    spot.angle = 0.4;
    spot.penumbra = 0.8;
    spot.position.set(0, 6, 4);
    spot.target.position.set(0, 0, 0);
    scene.add(spot);
    scene.add(spot.target);

    // ── Post-processing — UnrealBloom for crystal edge glow ───────────────────
    let composer: EffectComposer | null = null;
    try {
      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      const bloom = new UnrealBloomPass(
        new THREE.Vector2(canvas.offsetWidth, canvas.offsetHeight),
        0.4,
        0.6,
        0.2
      );
      composer.addPass(bloom);
    } catch {
      composer = null;
    }

    // ── Responsive globe position ──────────────────────────────────────────────
    // X: right-biased on wide screens, centered on mobile
    // Y: -0.2 keeps the globe near vertical centre; credential card (z-20) renders on top
    function computeGlobeX(): number {
      const w = canvas!.offsetWidth;
      if (w > 900) return 1.8;
      if (w > 600) return 0.8;
      return 0;
    }

    let globeX = computeGlobeX();
    const GLOBE_Y = -0.2;

    function positionObjects() {
      globeX = computeGlobeX();
      globe.position.set(globeX, GLOBE_Y, 0);
      wire.position.set(globeX, GLOBE_Y, 0);
      spot.target.position.set(globeX, GLOBE_Y, 0);
    }
    positionObjects();

    // ── Animation ─────────────────────────────────────────────────────────────
    const clock = new THREE.Clock();
    let rafId: number;

    function tick() {
      rafId = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();

      // 1. Slow constant rotation — Y ≈ one full rotation per 70 seconds
      globe.rotation.y += 0.0015;
      globe.rotation.x += 0.0004;

      // 2. Counter-rotating wireframe cage
      wire.rotation.y = globe.rotation.y - t * 0.3;
      wire.rotation.x = globe.rotation.x + t * 0.18;
      wire.rotation.z = -t * 0.12;

      // 3. Breathing scale pulse
      const breathe = 1 + Math.sin(t * 0.8) * 0.02;
      globe.scale.setScalar(breathe);
      wire.scale.setScalar(breathe);

      // 4. Orbiting Point Light A — the sweeping steel-blue highlight
      lightA.position.x = globeX + Math.sin(t * 0.4) * 4;
      lightA.position.z = Math.cos(t * 0.4) * 4;

      // 5. Vertex displacement — different sine frequencies per axis for organic morph
      const pos = geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const ox = originalPositions[i * 3];
        const oy = originalPositions[i * 3 + 1];
        const oz = originalPositions[i * 3 + 2];
        pos.setXYZ(
          i,
          ox + Math.sin(oy * 2.3 + t * 0.7) * 0.07,
          oy + Math.sin(oz * 2.1 + t * 0.5) * 0.06,
          oz + Math.sin(ox * 2.5 + t * 0.9) * 0.08
        );
      }
      pos.needsUpdate = true;
      geometry.computeVertexNormals();

      if (composer) {
        composer.render();
      } else {
        renderer.render(scene, camera);
      }
    }

    function onResize() {
      const w = canvas!.offsetWidth;
      const h = canvas!.offsetHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
      if (composer) composer.setSize(w, h);
      positionObjects();
    }

    window.addEventListener("resize", onResize, { passive: true });
    tick();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      wireGeometry.dispose();
      material.dispose();
      wireMaterial.dispose();
      envTexture.dispose();
      if (composer) composer.dispose();
      renderer.dispose();
    };
  }, [isXl]);

  if (!isXl) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
