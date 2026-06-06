import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onLoaded }) => {
  const canvasRef = useRef(null);
  const [impact, setImpact] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

    let width, height;
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const trail = [];
    const sparks = [];
    const bullet = {
      x: -100,
      y: height / 2,
      vx: 25, // Adjusted speed
      size: 15,
      length: 80,
    };

    let animationId;
    let frames = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Bullet trail
      for (let i = trail.length - 1; i >= 0; i--) {
        const p = trail[i];
        p.alpha -= 0.07;
        if (p.alpha <= 0) {
          trail.splice(i, 1);
          continue;
        }
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.3})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.2;
        s.alpha -= 0.02;
        if (s.alpha <= 0) {
          sparks.splice(i, 1);
          continue;
        }
        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
        ctx.fillRect(s.x, s.y, 2, 2);
      }

      if (!impact) {
        // Core Bullet Graphic
        const gradient = ctx.createLinearGradient(
          bullet.x - bullet.length,
          0,
          bullet.x,
          0,
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 1)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.roundRect(
          bullet.x - bullet.length,
          bullet.y - 2,
          bullet.length,
          4,
          2,
        );
        ctx.fill();

        // Update Position
        bullet.x += bullet.vx;

        if (frames % 2 === 0) {
          trail.push({
            x: bullet.x,
            y: bullet.y + (Math.random() - 0.5) * 4,
            size: Math.random() * 2 + 1,
            alpha: 0.8,
          });
        }

        // Impact detection
        if (bullet.x > width * 0.5) {
          setImpact(true);
          createImpactExplosion(bullet.x, bullet.y);
          setTimeout(() => onLoaded(), 800);
        }
      }
      frames++;
      animationId = requestAnimationFrame(draw);
    };

    const createImpactExplosion = (x, y) => {
      for (let i = 0; i < 40; i++) {
        sparks.push({
          x: x,
          y: y,
          vx: (Math.random() - 0.5) * 20,
          vy: (Math.random() - 0.5) * 20,
          alpha: 1,
        });
      }
    };
    animationId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [onLoaded, impact]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      <motion.div
        animate={impact ? { scale: 1.1, opacity: 0 } : { opacity: 1 }}
        className="z-10 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-display font-black text-white tracking-[0.2em] uppercase">
          S J
        </h1>
        <p className="text-[10px] font-bold text-zinc-600 tracking-[1em] mt-4 uppercase">
          Initializing Precision
        </p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
