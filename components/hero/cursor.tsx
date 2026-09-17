"use client"

import { useEffect, useRef } from "react";

// Global owl cursor — follows mouse across the entire site.
export default function Cursor() {
  const owlRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const owl = owlRef.current;
    if (!owl) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let animationFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      owl.style.transform = `translate3d(${currentX - 40}px, ${currentY - 40}px, 0)`;

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={owlRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: 80,
        height: 80,
        pointerEvents: "none",
        zIndex: 9999,
        willChange: "transform",
      }}
    >
      <img
        src="/owl.png"
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "contain", imageRendering: "pixelated" }}
      />
    </div>
  );
}