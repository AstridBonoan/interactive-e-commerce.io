"use client";

import { CABIN_ART, CABIN_VIEWS, fitCabinView, type CabinViewId } from "@/data/cabin";
import { withBasePath } from "@/lib/paths";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

export function CabinStage({
  viewId,
  children,
}: {
  viewId: CabinViewId;
  interactive?: boolean;
  children: ReactNode;
}) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState({ width: 1536, height: 1024 });
  const view = CABIN_VIEWS[viewId];
  const fitted = fitCabinView(view, stage);

  useLayoutEffect(() => {
    const node = stageRef.current;
    if (!node) return;
    const update = () => {
      const rect = node.getBoundingClientRect();
      setStage({ width: Math.max(1, rect.width), height: Math.max(1, rect.height) });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={stageRef} className="apartment-stage">
      <motion.div
        className="absolute left-0 top-0"
        style={{ width: CABIN_ART.width, height: CABIN_ART.height, originX: 0, originY: 0 }}
        initial={false}
        animate={{ x: fitted.x, y: fitted.y, scale: fitted.scale }}
        transition={{ type: "spring", stiffness: 70, damping: 18 }}
      >
        <img
          src={withBasePath(CABIN_ART.src)}
          alt="Cutaway of a five-room cabin: living room, bedroom, kitchen, studio, and bathroom"
          width={CABIN_ART.width}
          height={CABIN_ART.height}
          draggable={false}
          className="pointer-events-none block h-full w-full select-none"
        />
        <CabinLights />
        <svg
          viewBox={`0 0 ${CABIN_ART.width} ${CABIN_ART.height}`}
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          {children}
        </svg>
      </motion.div>
    </div>
  );
}

function CabinLights() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <span className="cabin-glow cabin-glow-lamp" />
      <span className="cabin-glow cabin-glow-bed-lamp" />
      <span className="cabin-glow cabin-glow-kitchen" />
      <span className="cabin-glow cabin-glow-tv" />
      <span className="cabin-glow cabin-glow-recording" />
      <span className="cabin-glow cabin-glow-studio-window" />
      <span className="cabin-glow cabin-glow-bath-window" />
      <span className="cabin-glow cabin-glow-lantern" />
    </div>
  );
}
