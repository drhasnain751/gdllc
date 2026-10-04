// import type { MouseEvent } from "react";
// import { useState } from "react";

// export function Globe() {
//   const [zoom, setZoom] = useState(1);
//   const [offset, setOffset] = useState({ x: 0, y: 0 });

//   const handlePointerMove = (event: MouseEvent<HTMLDivElement>) => {
//     const rect = event.currentTarget.getBoundingClientRect();
//     const px = (event.clientX - rect.left) / rect.width;
//     const py = (event.clientY - rect.top) / rect.height;

//     setZoom(1.02);
//     setOffset({
//       x: (px - 0.5) * 8,
//       y: (py - 0.5) * 8,
//     });
//   };

//   const reset = () => {
//     setZoom(1);
//     setOffset({ x: 0, y: 0 });
//   };

//   return (
//     <div
//       className="relative h-[360px] w-full overflow-hidden rounded-[30px] border border-slate-200 bg-[#edf3f2] sm:h-[440px]"
//       aria-label="Simple Google Maps style location map"
//       onMouseMove={handlePointerMove}
//       onMouseLeave={reset}
//     >
//       <div
//         className="absolute inset-0 transition-transform duration-700 ease-out"
//         style={{
//           transform: `scale(${zoom}) translate(${offset.x}px, ${offset.y}px)`,
//           transformOrigin: "center",
//         }}
//       >
//         <svg
//           viewBox="0 0 520 360"
//           width="100%"
//           height="100%"
//           role="img"
//           aria-label="Google Maps style map showing the GlobalDealz address"
//           className="block h-full w-full"
//         >
//           <rect width="520" height="360" fill="#edf3f2" />

//           <g opacity="0.75" stroke="#c8d0d0" strokeWidth="1.6" fill="none">
//             <path d="M 0 70 L 520 70 M 0 120 L 520 120 M 0 170 L 520 170 M 0 220 L 520 220 M 0 270 L 520 270 M 0 320 L 520 320" />
//             <path d="M 50 0 L 50 360 M 120 0 L 120 360 M 200 0 L 200 360 M 280 0 L 280 360 M 360 0 L 360 360 M 440 0 L 440 360" />
//           </g>

//           <g
//             opacity="0.7"
//             stroke="#c3c9c6"
//             strokeWidth="3"
//             fill="none"
//             strokeLinecap="round"
//           >
//             <path d="M 0 270 C 80 245, 150 235, 220 210 S 340 160, 520 165" />
//             <path d="M 100 0 C 128 52, 120 120, 145 180 S 200 275, 210 360" />
//             <path d="M 250 0 C 260 90, 280 150, 330 200 S 420 300, 520 330" />
//             <path d="M 0 120 C 85 110, 120 130, 180 145 S 320 170, 430 150 S 490 138, 520 130" />
//           </g>

//           <g opacity="0.45" fill="#dfe5e1">
//             <circle cx="90" cy="70" r="16" />
//             <circle cx="390" cy="95" r="12" />
//             <circle cx="440" cy="260" r="18" />
//           </g>

//           <g opacity="0.5" fill="#d6ddd9">
//             <rect x="80" y="225" width="88" height="14" rx="7" />
//             <rect x="320" y="120" width="122" height="14" rx="7" />
//             <rect x="295" y="52" width="102" height="15" rx="7" />
//           </g>

//           <g
//             fontFamily="Arial, sans-serif"
//             fontSize="17"
//             fill="#5a6668"
//             opacity="0.8"
//           >
//             <text x="65" y="90" transform="rotate(-22 65 90)">Pinedale</text>
//             <text x="158" y="305" transform="rotate(12 158 305)">Franklin Ave</text>
//             <text x="275" y="200" transform="rotate(-18 275 200)">Arnot Ln</text>
//           </g>
//         </svg>
//       </div>

//       <div className="absolute left-3 top-3 flex items-center gap-2 rounded-xl bg-white/90 px-3 py-2 text-sm font-medium text-slate-700 shadow-[0_2px_10px_rgba(0,0,0,0.08)] backdrop-blur-sm">
//         <span>Open in Maps</span>
//         <svg
//           viewBox="0 0 24 24"
//           className="h-4 w-4"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//         >
//           <path d="M14 3h7v7" />
//           <path d="M10 14 21 3" />
//           <path d="M21 14v6H3V3h7" />
//         </svg>
//       </div>

//       <div className="absolute left-4 top-[120px] flex items-center gap-2 rounded-full bg-white/75 px-3 py-2 text-sm font-medium text-slate-700 shadow-[0_2px_10px_rgba(0,0,0,0.08)] backdrop-blur-sm">
//         <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-white ring-2 ring-slate-300">
//           {" "}
//         </span>
//         <span>to Code LAC</span>
//       </div>

//       <div className="absolute inset-0 flex items-center justify-center">
//         <div className="relative">
//           <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/20 blur-md" />
//           <div className="absolute left-1/2 top-[36px] h-10 w-10 -translate-x-1/2 rounded-full bg-red-500/20 blur-md" />

//           <div className="relative h-[100px] w-[76px]">
//             <div className="absolute left-1/2 top-0 h-10 w-10 -translate-x-1/2 rounded-full bg-red-500 shadow-[0_8px_16px_rgba(239,68,68,0.45)]" />
//             <div className="absolute left-1/2 top-[22px] h-9 w-9 -translate-x-1/2 rounded-full border-4 border-white bg-red-500 shadow-[0_8px_16px_rgba(239,68,68,0.45)]" />
//             <div className="absolute left-1/2 top-[52px] h-10 w-10 -translate-x-1/2 rounded-[50%_50%_50%_0] rotate-[-45deg] bg-red-500 shadow-[0_8px_16px_rgba(239,68,68,0.45)]" />
//             <div className="absolute left-[50%] top-[57px] h-4 w-4 -translate-x-1/2 rounded-full bg-white/20" />
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-sm">
//         <span className="text-[10px] font-bold tracking-[0.12em] text-slate-500">
//           Google
//         </span>
//         <span className="text-slate-500">Map data ©2026</span>
//       </div>

//       <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
//         <svg
//           viewBox="0 0 24 24"
//           className="h-5 w-5 text-slate-600"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="1.8"
//         >
//           <path d="M12 3v18M3 12h18" />
//           <circle cx="12" cy="12" r="7" />
//         </svg>
//       </div>
//     </div>
//   );
// }



import type { MouseEvent } from "react";
import { useState } from "react";

export function Globe() {
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handlePointerMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    // Smooth zoom and tilt offset on hover
    setZoom(1.08);
    setOffset({
      x: (px - 0.5) * 12,
      y: (py - 0.5) * 12,
    });
  };

  const reset = () => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div
      className="relative h-[360px] w-full overflow-hidden rounded-[30px] border border-slate-200 bg-[#edf3f2] sm:h-[440px]"
      aria-label="Simple Google Maps style location map"
      onMouseMove={handlePointerMove}
      onMouseLeave={reset}
    >
      {/* Zoomable Google Map Frame */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          transform: `scale(${zoom}) translate(${offset.x}px, ${offset.y}px)`,
          transformOrigin: "center",
        }}
      >
        <iframe
          title="Google Maps Location"
          src="https://maps.google.com/maps?q=37.7749,-122.4194&z=14&output=embed"
          className="h-full w-full border-0 pointer-events-none"
          loading="lazy"
        />
      </div>

      {/* Floating Header UI */}
      <a
        href="https://maps.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute left-3 top-3 flex items-center gap-2 rounded-xl bg-white/90 px-3 py-2 text-sm font-medium text-slate-700 shadow-[0_2px_10px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-transform hover:scale-105"
      >
        <span>Open in Maps</span>
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M14 3h7v7" />
          <path d="M10 14 21 3" />
          <path d="M21 14v6H3V3h7" />
        </svg>
      </a>

      {/* Location Badge */}
      <div className="absolute left-4 top-[120px] flex items-center gap-2 rounded-full bg-white/85 px-3 py-2 text-sm font-medium text-slate-700 shadow-[0_2px_10px_rgba(0,0,0,0.08)] backdrop-blur-sm">
        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 ring-2 ring-blue-300 animate-ping" />
        <span>to Code LAC</span>
      </div>

      {/* Central Marker / Pin */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="relative">
          <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/20 blur-md" />
          <div className="absolute left-1/2 top-[36px] h-10 w-10 -translate-x-1/2 rounded-full bg-red-500/20 blur-md" />

          <div className="relative h-[100px] w-[76px]">
            <div className="absolute left-1/2 top-0 h-10 w-10 -translate-x-1/2 rounded-full bg-red-500 shadow-[0_8px_16px_rgba(239,68,68,0.45)]" />
            <div className="absolute left-1/2 top-[22px] h-9 w-9 -translate-x-1/2 rounded-full border-4 border-white bg-red-500 shadow-[0_8px_16px_rgba(239,68,68,0.45)]" />
            <div className="absolute left-1/2 top-[52px] h-10 w-10 -translate-x-1/2 rounded-[50%_50%_50%_0] rotate-[-45deg] bg-red-500 shadow-[0_8px_16px_rgba(239,68,68,0.45)]" />
            <div className="absolute left-[50%] top-[57px] h-4 w-4 -translate-x-1/2 rounded-full bg-white/20" />
          </div>
        </div>
      </div>

      {/* Google Attribution Bar */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-sm">
        <span className="text-[10px] font-bold tracking-[0.12em] text-slate-500">
          Google
        </span>
        <span className="text-slate-500">Map data ©2026</span>
      </div>

      {/* Target/Locate Control Button */}
      <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-[0_2px_8px_rgba(0,0,0,0.08)] backdrop-blur-sm">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-slate-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M12 3v18M3 12h18" />
          <circle cx="12" cy="12" r="7" />
        </svg>
      </div>
    </div>
  );
}