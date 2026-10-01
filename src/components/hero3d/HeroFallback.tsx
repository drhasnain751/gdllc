import { CircleDollarSign, Sparkles } from "lucide-react";
import { type MouseEvent, useEffect, useRef, useState } from "react";

export function HeroFallback() {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [rotation, setRotation] = useState({ x: 18, y: -18, z: 0 });
  const [scale, setScale] = useState(0.82);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const handle = () => {
      const rect = frame.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const progress = Math.min(1, Math.max(0, (viewport - rect.top) / (viewport + rect.height)));

      setRotation({
        x: 20 - progress * 26,
        y: -22 + progress * 28,
        z: progress * 7,
      });
      setScale(0.82 + progress * 0.7);
    };

    handle();
    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle);

    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
    };
  }, []);

  const handlePointerMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    setPointer({
      x: (px - 0.5) * 18,
      y: (0.5 - py) * 18,
    });
  };

  const panelStyle = {
    transform: `perspective(1200px) rotateX(${rotation.x + pointer.y}deg) rotateY(${rotation.y + pointer.x}deg) rotateZ(${rotation.z}deg) scale(${scale})`,
  };

  return (
    <div
      className="hero-stage relative mx-auto w-full max-w-[620px] pt-4"
      ref={frameRef}
      onMouseMove={handlePointerMove}
      onMouseLeave={() => setPointer({ x: 0, y: 0 })}
    >
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />
      <div className="relative" style={panelStyle}>
        <div className="hero-panel relative overflow-hidden rounded-[30px] border border-white/10 bg-[#091a32]/85 p-4 shadow-[0_40px_110px_rgba(0,178,238,0.18)] backdrop-blur-2xl sm:p-6">
          <div className="hero-grid-sheen absolute inset-0" />
          <div className="absolute inset-x-10 top-0 h-20 rounded-full bg-[radial-gradient(circle,rgba(0,178,238,0.48),transparent_70%)] blur-3xl" />
          <div className="relative">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-300/80">
                  Demo Dashboard — illustrative data
                </p>
                <p className="mt-2 text-3xl font-light text-white">$128,420</p>
              </div>
              <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-cyan-300">
                +18.4%
              </span>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
              <div className="mb-5 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-slate-300/75">
                <span>Sales</span>
                <span>Last 12 months</span>
              </div>
              <svg viewBox="0 0 600 220" className="h-auto w-full" role="img" aria-label="Sales chart">
                {[30, 80, 130, 180].map((y) => (
                  <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="rgba(148,163,184,0.2)" />
                ))}
                <path
                  d="M0 155 C50 150,90 118,130 126 S215 110,270 120 S355 78,420 96 S505 52,600 30 L600 220 L0 220Z"
                  fill="rgba(0,178,238,0.12)"
                />
                <path
                  d="M0 155 C50 150,90 118,130 126 S215 110,270 120 S355 78,420 96 S505 52,600 30"
                  fill="none"
                  stroke="#52d3ff"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 text-[11px] text-slate-300/80">
              {[
                { label: "Orders", value: "1,842" },
                { label: "Inventory", value: "94.2%" },
                { label: "Fulfillment", value: "98.7%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-slate-900/60 p-3 text-center"
                >
                  <p className="text-base font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-slate-300/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-floating-card absolute -left-2 top-20 w-40 -rotate-12 rounded-2xl border border-cyan-400/25 bg-slate-900/85 p-4 shadow-2xl backdrop-blur-xl sm:-left-6">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.18em] text-slate-300/75">Payout</span>
            <CircleDollarSign className="size-4 text-cyan-300" />
          </div>
          <p className="mt-4 text-xl font-semibold text-white">$42,850</p>
          <p className="mt-1 text-[10px] text-slate-300/65">Arrives tomorrow</p>
        </div>

        <div className="hero-floating-card hero-floating-card-alt absolute -bottom-2 right-2 w-52 rotate-3 rounded-2xl border border-cyan-400/30 bg-[#05152e] p-4 text-white shadow-2xl sm:-right-3">
          <div className="flex justify-between">
            <span className="text-[10px] uppercase tracking-[0.18em] text-slate-300/75">
              GlobalDealz
            </span>
            <Sparkles className="size-4 text-cyan-300" />
          </div>
          <div className="mt-10 flex items-end justify-between">
            <span className="font-mono text-sm">•••• 7842</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-slate-300/70">Payment</span>
          </div>
        </div>
      </div>
    </div>
  );
}
