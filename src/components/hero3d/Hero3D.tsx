import { Suspense, lazy, useEffect, useRef, useState, type ReactNode } from "react";

import { HeroFallback } from "./HeroFallback";

const Scene = lazy(() => import("./Scene").then((module) => ({ default: module.Scene })));

export function Hero3D({ fallback = <HeroFallback /> }: { fallback?: ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [supported, setSupported] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReducedMotion = () => setReducedMotion(mediaQuery.matches);
    updateReducedMotion();
    mediaQuery.addEventListener?.("change", updateReducedMotion);

    const hasWebGL = (() => {
      try {
        const canvas = document.createElement("canvas");
        return Boolean(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
      } catch {
        return false;
      }
    })();
    setSupported(hasWebGL);

    let idle: number | ReturnType<typeof setTimeout> | undefined;

    if (typeof requestIdleCallback === "function") {
      idle = requestIdleCallback(() => setMounted(true));
    } else {
      idle = setTimeout(() => setMounted(true), 100);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setVisible(entry ? entry.isIntersecting : false);
      },
      { rootMargin: "180px" },
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      mediaQuery.removeEventListener?.("change", updateReducedMotion);
      if (typeof idle === "number") {
        clearTimeout(idle);
      }
      if (typeof idle !== "number" && idle) {
        clearTimeout(idle);
      }
      observer.disconnect();
    };
  }, []);

  if (!mounted || !supported) {
    return <>{fallback}</>;
  }

  return (
    <div ref={wrapperRef} className="relative mx-auto w-full max-w-[620px] pt-4">
      {visible ? (
        <Suspense fallback={<>{fallback}</>}>
          <Scene reducedMotion={reducedMotion} />
        </Suspense>
      ) : (
        <>{fallback}</>
      )}
    </div>
  );
}
