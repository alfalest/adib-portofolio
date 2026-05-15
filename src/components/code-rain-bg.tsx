import { useEffect, useRef } from "react";
import { useTheme } from "@/context/theme.context";

interface Particle {
  x: number;
  y: number;
  char: string;
  speed: number;
  opacity: number;
  fontSize: number;
  fadeSpeed: number;
}

const CODE_CHARS = [
  "{", "}", "<", ">", "/", "=", ";", "(", ")", "[", "]",
  "const", "let", "fn", "=>", "if", "0", "1", "::", "//",
  "import", "return", "async", "&&", "||", "!=", "++",
  "</>", "npm", "git", "def", "class", "void", "int",
];

export default function CodeRainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useTheme();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
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
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Initialize particles
    const PARTICLE_COUNT = Math.floor(window.innerWidth / 25);
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () =>
      createParticle(canvas.width, canvas.height, true)
    );

    function createParticle(
      w: number,
      h: number,
      randomY = false
    ): Particle {
      return {
        x: Math.random() * w,
        y: randomY ? Math.random() * h : -20,
        char: CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)],
        speed: 0.6 + Math.random() * 0.8,
        opacity: 0.3 + Math.random() * 0.12,
        fontSize: 11 + Math.random() * 6,
        fadeSpeed: 0.0003 + Math.random() * 0.001,
      };
    }

    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Mouse repulsion (subtle push away)
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repelRadius = 150;

        let drawX = p.x;
        let drawY = p.y;

        if (dist < repelRadius) {
          const force = (1 - dist / repelRadius) * 30;
          drawX += (dx / dist) * force;
          drawY += (dy / dist) * force;
        }

        ctx.font = `bold ${p.fontSize}px "JetBrains Mono", "Fira Code", monospace`;
        ctx.fillStyle = isDark
          ? `rgba(96, 165, 250, ${p.opacity})`
          : `rgba(37, 99, 235, ${p.opacity})`;
        ctx.fillText(p.char, drawX, drawY);

        // Move down
        p.y += p.speed;

        // Subtle horizontal drift
        p.x += Math.sin(p.y * 0.01) * 0.2;

        // Reset when off screen
        if (p.y > canvas.height + 20) {
          particles[i] = createParticle(canvas.width, canvas.height, false);
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
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
