import { useEffect, useRef } from "react";
import { useTheme } from "@/context/theme.context";

interface GlowParticle {
  x: number;
  y: number;
  life: number;
  maxLife: number;
  char: string;
  vx: number;
  vy: number;
  size: number;
}

const CURSOR_CHARS = ["{", "}", "<", ">", "/", ";", "=", "(", ")", "0", "1"];

export default function CursorGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useTheme();
  const particlesRef = useRef<GlowParticle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const prevMouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      prevMouseRef.current = { ...mouseRef.current };
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    let frameCount = 0;

    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const prev = prevMouseRef.current;
      const speed = Math.sqrt(
        (mouse.x - prev.x) ** 2 + (mouse.y - prev.y) ** 2
      );

      frameCount++;

      // Spawn particles based on cursor speed
      if (speed > 3 && frameCount % 2 === 0) {
        const count = Math.min(Math.floor(speed / 8), 3);
        for (let i = 0; i < count; i++) {
          particlesRef.current.push({
            x: mouse.x + (Math.random() - 0.5) * 10,
            y: mouse.y + (Math.random() - 0.5) * 10,
            life: 1,
            maxLife: 40 + Math.random() * 30,
            char: CURSOR_CHARS[
              Math.floor(Math.random() * CURSOR_CHARS.length)
            ],
            vx: (Math.random() - 0.5) * 2,
            vy: -1 - Math.random() * 2,
            size: 10 + Math.random() * 4,
          });
        }
      }

      // Draw glow around cursor
      const glowGradient = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, 80
      );
      if (isDark) {
        glowGradient.addColorStop(0, "rgba(96, 165, 250, 0.06)");
        glowGradient.addColorStop(1, "rgba(96, 165, 250, 0)");
      } else {
        glowGradient.addColorStop(0, "rgba(37, 99, 235, 0.04)");
        glowGradient.addColorStop(1, "rgba(37, 99, 235, 0)");
      }
      ctx.fillStyle = glowGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04; // Gravity for that "falling" feel
        p.vx *= 0.98; // Air resistance

        const progress = p.life / p.maxLife;
        const alpha = 1 - progress;

        ctx.save();
        ctx.globalAlpha = alpha * 0.6;
        ctx.font = `${p.size}px "JetBrains Mono", "Fira Code", monospace`;
        ctx.fillStyle = isDark
          ? `rgba(147, 197, 253, ${alpha * 0.8})`
          : `rgba(59, 130, 246, ${alpha * 0.7})`;
        ctx.fillText(p.char, p.x, p.y);
        ctx.restore();

        if (progress >= 1) {
          particles.splice(i, 1);
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      aria-hidden="true"
    />
  );
}
