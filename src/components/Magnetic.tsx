"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
  disabled?: boolean;
}

export default function Magnetic({
  children,
  strength = 0.35,
  className = "",
  disabled = false,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    // Avoid magnetic pull on touch screens
    if (disabled || e.pointerType === "touch" || !ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    setPosition({
      x: middleX * strength,
      y: middleY * strength,
    });
  };

  const handlePointerLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: "spring",
        stiffness: 240,
        damping: 18,
        mass: 0.1,
      }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
