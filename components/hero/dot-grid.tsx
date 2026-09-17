"use client"

import { useEffect, useRef } from "react";

// Dot-grid spotlight — scoped to Hero section only.
// Renders a dot pattern that reveals itself around the mouse cursor.
export default function DotGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = gridRef.current;
    if (!container) return;

    // Seed to container centre
    const r = container.getBoundingClientRect();
    let targetX = r.left + r.width / 2;
    let targetY = r.top + r.height / 2;
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

      // Container-relative so the mask follows correctly
      const rect = container.getBoundingClientRect();
      container.style.setProperty("--mouse-x", `${currentX - rect.left}px`);
      container.style.setProperty("--mouse-y", `${currentY - rect.top}px`);

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
      ref={gridRef}
      className="dot-grid-hero pointer-events-none absolute inset-0 z-0"
    />
  );
}
