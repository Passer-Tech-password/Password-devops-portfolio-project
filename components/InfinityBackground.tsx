"use client";

import { useEffect, useRef } from 'react';

export default function InfinityBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{x: number, y: number, z: number, color: string}> = [];
    
    // Configuration
    const particleCount = 400; // Increased count for density
    const speed = 2; // Speed of movement
    const depth = 2000; // Depth of field
    
    const colors = ['#ffffff', '#80bfff', '#ccccff']; // White and slight blueish tints

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: (Math.random() - 0.5) * canvas.width * 3,
          y: (Math.random() - 0.5) * canvas.height * 3,
          z: Math.random() * depth,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    const draw = () => {
      // Clear screen
      ctx.fillStyle = '#111111';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      
      particles.forEach((p) => {
        // Move particle towards viewer (decrease z)
        p.z -= speed;
        
        // Reset if it passes the viewer
        if (p.z <= 0) {
          p.x = (Math.random() - 0.5) * canvas.width * 3;
          p.y = (Math.random() - 0.5) * canvas.height * 3;
          p.z = depth;
        }
        
        // Perspective projection
        const fov = 500;
        const scale = fov / p.z;
        
        const x2d = cx + p.x * scale;
        const y2d = cy + p.y * scale;
        
        // Size scales with proximity
        const size = Math.max(0.1, 1.5 * scale);
        
        // Draw only if within bounds (optional optimization, but canvas handles off-screen fine)
        if (x2d >= 0 && x2d <= canvas.width && y2d >= 0 && y2d <= canvas.height) {
             const opacity = Math.min(1, (depth - p.z) / (depth * 0.2));
             ctx.globalAlpha = opacity;
             ctx.fillStyle = p.color;
             
             ctx.beginPath();
             ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
             ctx.fill();
        }
      });
      
      animationFrameId = requestAnimationFrame(draw);
    };

    // Handle resize
    const handleResize = () => {
      resizeCanvas();
      // Re-init particles to cover new area if needed, or just let them flow
    };
    
    window.addEventListener('resize', handleResize);
    
    resizeCanvas();
    initParticles();
    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
      style={{ background: '#111111' }}
    />
  );
}