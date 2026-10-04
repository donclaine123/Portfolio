"use client";

import React, { useEffect, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import "lenis/dist/lenis.css";

function ScrollLock({ loading }: { loading: boolean }) {
  const lenis = useLenis();

  useEffect(() => {
    if (loading) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [loading, lenis]);

  return null;
}

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  return (
    <ReactLenis
      root
      options={{
        smoothWheel: false,
        syncTouch: false,
      }}
    >
      <ScrollLock loading={loading} />
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      {children}
    </ReactLenis>
  );
}
