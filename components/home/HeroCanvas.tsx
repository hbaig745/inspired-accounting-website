"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  rgb: string;
  opacity: number;
  isSquare: boolean;
  angle: number;
  angularV: number;
}

// taupe: 168,155,140  steel: 74,120,158
const COLORS = ["168,155,140", "74,120,158"];

export default function HeroCanvas() {
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
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    const particles: Particle[] = [];

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas!.offsetWidth;
      const h = canvas!.offsetHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.scale(dpr, dpr);
    }

    function init() {
      particles.length = 0;
      const w = canvas!.offsetWidth;
      const h = canvas!.offsetHeight;
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * 2.2 + 0.6,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          rgb: COLORS[Math.random() > 0.45 ? 0 : 1],
          opacity: Math.random() * 0.09 + 0.03,
          isSquare: Math.random() > 0.65,
          angle: Math.random() * Math.PI * 2,
          angularV: (Math.random() - 0.5) * 0.008,
        });
      }
    }

    function tick() {
      if (!canvas || !ctx) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      ctx.clearRect(0, 0, w, h);

      // Lerp mouse position for smooth parallax
      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.angularV;

        // Wrap edges
        if (p.x < -6) p.x = w + 6;
        if (p.x > w + 6) p.x = -6;
        if (p.y < -6) p.y = h + 6;
        if (p.y > h + 6) p.y = -6;

        // Parallax: larger particles shift more
        const strength = p.size * 0.016;
        const px = p.x + (currentX - w / 2) * strength;
        const py = p.y + (currentY - h / 2) * strength;

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = `rgb(${p.rgb})`;
        ctx.translate(px, py);
        ctx.rotate(p.angle);

        if (p.isSquare) {
          ctx.fillRect(-p.size, -p.size, p.size * 2, p.size * 2);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      rafId = requestAnimationFrame(tick);
    }

    function onMouseMove(e: MouseEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    }

    function onResize() {
      resize();
      init();
    }

    resize();
    init();
    tick();

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
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
