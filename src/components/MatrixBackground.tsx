import { useEffect, useRef } from "react";

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    const chars = "01アイウエオカキクケコサシスセソ{}[]<>/\\|=+-*&^%$#@!";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1).map(() => Math.random() * -100);

    const draw = () => {
      ctx.fillStyle = "rgba(5, 8, 18, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Alternate between cyan and purple
        if (Math.random() > 0.5) {
          ctx.fillStyle = `rgba(0, 210, 255, ${Math.random() * 0.15 + 0.03})`;
        } else {
          ctx.fillStyle = `rgba(160, 80, 255, ${Math.random() * 0.1 + 0.02})`;
        }

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
};

export default MatrixBackground;
