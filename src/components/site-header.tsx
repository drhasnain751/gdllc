// // // import { Link } from "@tanstack/react-router";
// // // import { Menu, X } from "lucide-react";
// // // import { useEffect, useState } from "react";

// // // import { Button } from "@/components/ui/button";
// // // import { openConsultation } from "@/lib/site-info";

// // // const navigation = [
// // // 	["Home", "/"],
// // // 	["Services", "/services"],
// // // 	["Infrastructure", "/infrastructure"],
// // // 	["Joint Ventures", "/joint-ventures"],
// // // 	["Case Studies", "/case-studies"],
// // // 	["Pricing", "/pricing"],
// // // 	["Contact", "/contact"],
// // // ] as const;

// // // export function BrandMark({ onDark = false }: { onDark?: boolean | undefined }) {
// // // 	const logoSrc = onDark
// // // 		? "/globaldealz-header-logo-light.svg"
// // // 		: "/globaldealz-header-logo-dark.svg";

// // // 	return (
// // // 		<span
// // // 			className="inline-flex items-center overflow-visible"
// // // 			aria-label="GlobalDealz Infrastructure"
// // // 		>
// // // 			<img
// // // 				src={logoSrc}
// // // 				alt="GlobalDealz Infrastructure"
// // // 				className="block h-[52px] w-auto max-w-[190px] object-contain sm:h-[60px] md:h-[68px] lg:h-[72px] xl:h-[76px]"
// // // 				draggable={false}
// // // 				style={{ background: "transparent", filter: "drop-shadow(0 6px 22px rgba(3, 11, 22, 0.15))" }}
// // // 			/>
// // // 		</span>
// // // 	);
// // // }

// // // export function SiteHeader() {
// // // 	const [open, setOpen] = useState(false);
// // // 	const [scrolled, setScrolled] = useState(false);

// // // 	useEffect(() => {
// // // 		document.documentElement.classList.add("dark");
// // // 		window.localStorage.setItem("globaldealz-theme", "dark");

// // // 		const onScroll = () => setScrolled(window.scrollY > 12);
// // // 		onScroll();
// // // 		window.addEventListener("scroll", onScroll, { passive: true });
// // // 		return () => window.removeEventListener("scroll", onScroll);
// // // 	}, []);

// // // 	return (
// // // 		<header
// // // 			className={`fixed inset-x-0 top-0 z-50 transition-all ${
// // // 				scrolled
// // // 					? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
// // // 					: "bg-transparent"
// // // 			}`}
// // // 		>
// // // 			<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
// // // 				<Link to="/" aria-label="GlobalDealz home">
// // // 					<BrandMark onDark={true} />
// // // 				</Link>
// // // 				<nav
// // // 					className="hidden items-center gap-7 lg:flex"
// // // 					aria-label="Main navigation"
// // // 				>
// // // 					{navigation.map(([label, to]) => (
// // // 						<Link
// // // 							key={to}
// // // 							to={to}
// // // 							className="text-sm text-muted-foreground transition-colors hover:text-foreground"
// // // 						>
// // // 							{label}
// // // 						</Link>
// // // 					))}
// // // 				</nav>
// // // 				<div className="flex items-center gap-2">
// // // 					<Button
// // // 						className="hidden rounded-full px-5 sm:inline-flex"
// // // 						onClick={() => openConsultation()}
// // // 						aria-label="Book a consultation"
// // // 					>
// // // 						Book a Consultation
// // // 					</Button>
// // // 					<Button
// // // 						variant="ghost"
// // // 						size="icon"
// // // 						className="rounded-full lg:hidden"
// // // 						onClick={() => setOpen((value) => !value)}
// // // 						aria-label={open ? "Close menu" : "Open menu"}
// // // 						aria-expanded={open}
// // // 					>
// // // 						{open ? <X /> : <Menu />}
// // // 					</Button>
// // // 				</div>
// // // 			</div>
// // // 			{open && (
// // // 				<nav
// // // 					className="border-t border-border bg-background px-5 py-5 lg:hidden"
// // // 					aria-label="Mobile navigation"
// // // 				>
// // // 					<div className="mx-auto flex max-w-7xl flex-col gap-1">
// // // 						{navigation.map(([label, to]) => (
// // // 							<Link
// // // 								key={to}
// // // 								to={to}
// // // 								onClick={() => setOpen(false)}
// // // 								className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-muted"
// // // 							>
// // // 								{label}
// // // 							</Link>
// // // 						))}
// // // 						<Button
// // // 							className="mt-3 rounded-full"
// // // 							onClick={() => {
// // // 								setOpen(false);
// // // 								openConsultation();
// // // 							}}
// // // 							aria-label="Book a consultation"
// // // 						>
// // // 							Book a Consultation
// // // 						</Button>
// // // 					</div>
// // // 				</nav>
// // // 			)}
// // // 		</header>
// // // 	);
// // // }


// // import { Link } from "@tanstack/react-router";
// // import { Menu, X } from "lucide-react";
// // import { useEffect, useRef, useState } from "react";

// // import { Button } from "@/components/ui/button";
// // import { openConsultation } from "@/lib/site-info";

// // const navigation = [
// //     ["Home", "/"],
// //     ["Services", "/services"],
// //     ["Infrastructure", "/infrastructure"],
// //     ["Joint Ventures", "/joint-ventures"],
// //     ["Case Studies", "/case-studies"],
// //     ["Pricing", "/pricing"],
// //     ["Contact", "/contact"],
// // ] as const;

// // export function BrandMark({ onDark = false }: { onDark?: boolean | undefined }) {
// //     const logoSrc = onDark
// //         ? "/globaldealz-header-logo-light.svg"
// //         : "/globaldealz-header-logo-dark.svg";

// //     return (
// //         <span
// //             className="inline-flex items-center overflow-visible"
// //             aria-label="GlobalDealz Infrastructure"
// //         >
// //             <img
// //                 src={logoSrc}
// //                 alt="GlobalDealz Infrastructure"
// //                 // Larger logo at every breakpoint
// //                 className="block h-[64px] w-auto max-w-[240px] object-contain sm:h-[76px] sm:max-w-[280px] md:h-[88px] md:max-w-[320px] lg:h-[96px] lg:max-w-[340px] xl:h-[104px] xl:max-w-[380px]"
// //                 draggable={false}
// //                 style={{
// //                     background: "transparent",
// //                     filter: "drop-shadow(0 10px 18px rgba(3, 11, 22, 0.45))",
// //                 }}
// //             />
// //         </span>
// //     );
// // }

// // const headerStyles = `
// // @keyframes gd-float {
// //   0%, 100% { transform: translateY(0) rotateX(0deg); }
// //   50%      { transform: translateY(-3px) rotateX(1.2deg); }
// // }
// // @keyframes gd-sheen {
// //   0%   { transform: translateX(-130%) skewX(-18deg); }
// //   60%, 100% { transform: translateX(260%) skewX(-18deg); }
// // }
// // @keyframes gd-edge {
// //   0%   { background-position: 0% 50%; }
// //   100% { background-position: 200% 50%; }
// // }
// // @keyframes gd-drop {
// //   from { opacity: 0; transform: translateY(-40px) rotateX(-25deg); }
// //   to   { opacity: 1; transform: translateY(0) rotateX(0deg); }
// // }
// // .gd-stage { perspective: 1400px; }
// // .gd-drop  { animation: gd-drop 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) both; }
// // .gd-float { animation: gd-float 7s ease-in-out infinite; transform-style: preserve-3d; }
// // .gd-plate {
// //   transform-style: preserve-3d;
// //   transition: transform 0.25s ease-out, box-shadow 0.4s ease, background 0.4s ease;
// //   will-change: transform;
// // }
// // .gd-edge {
// //   background: linear-gradient(90deg, transparent, rgba(120,190,255,0.9), rgba(255,255,255,0.9), rgba(120,190,255,0.9), transparent);
// //   background-size: 200% 100%;
// //   animation: gd-edge 5s linear infinite;
// // }
// // .gd-sheen {
// //   animation: gd-sheen 6.5s ease-in-out infinite;
// //   background: linear-gradient(100deg, transparent 0%, rgba(255,255,255,0.14) 50%, transparent 100%);
// // }
// // .gd-z-logo   { transform: translateZ(46px); transition: transform 0.3s ease; }
// // .gd-z-nav    { transform: translateZ(24px); }
// // .gd-z-cta    { transform: translateZ(36px); }
// // .gd-link {
// //   position: relative;
// //   display: inline-block;
// //   transition: transform 0.25s ease, color 0.25s ease, text-shadow 0.25s ease;
// // }
// // .gd-link:hover {
// //   transform: translateZ(14px) translateY(-2px);
// //   text-shadow: 0 6px 14px rgba(0,0,0,0.5);
// // }
// // .gd-link::after {
// //   content: "";
// //   position: absolute;
// //   left: 0; right: 0; bottom: -6px; height: 2px;
// //   border-radius: 2px;
// //   background: linear-gradient(90deg, rgba(120,190,255,0), rgba(120,190,255,1), rgba(120,190,255,0));
// //   transform: scaleX(0);
// //   transition: transform 0.3s ease;
// // }
// // .gd-link:hover::after { transform: scaleX(1); }
// // @media (prefers-reduced-motion: reduce) {
// //   .gd-drop, .gd-float, .gd-edge, .gd-sheen { animation: none !important; }
// //   .gd-plate, .gd-link, .gd-z-logo { transition: none !important; }
// // }
// // `;

// // export function SiteHeader() {
// //     const [open, setOpen] = useState(false);
// //     const [scrolled, setScrolled] = useState(false);
// //     const plateRef = useRef<HTMLDivElement>(null);

// //     useEffect(() => {
// //         document.documentElement.classList.add("dark");
// //         window.localStorage.setItem("globaldealz-theme", "dark");

// //         const onScroll = () => setScrolled(window.scrollY > 12);
// //         onScroll();
// //         window.addEventListener("scroll", onScroll, { passive: true });
// //         return () => window.removeEventListener("scroll", onScroll);
// //     }, []);

// //     const reduceMotion = () =>
// //         typeof window !== "undefined" &&
// //         window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// //     // Pointer-driven 3D tilt
// //     const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
// //         const el = plateRef.current;
// //         if (!el || reduceMotion() || event.pointerType === "touch") return;
// //         const rect = el.getBoundingClientRect();
// //         const px = (event.clientX - rect.left) / rect.width - 0.5; // -0.5 .. 0.5
// //         const py = (event.clientY - rect.top) / rect.height - 0.5;
// //         el.style.transform = `rotateX(${(-py * 10).toFixed(2)}deg) rotateY(${(px * 4).toFixed(2)}deg)`;
// //     };

// //     const handleLeave = () => {
// //         if (plateRef.current) plateRef.current.style.transform = "";
// //     };

// //     return (
// //         <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 lg:px-8">
// //             <style>{headerStyles}</style>

// //             <div className="gd-stage mx-auto max-w-7xl">
// //                 <div className="gd-drop">
// //                     <div className="gd-float">
// //                         <div
// //                             ref={plateRef}
// //                             onPointerMove={handleMove}
// //                             onPointerLeave={handleLeave}
// //                             className={`gd-plate relative rounded-2xl border border-white/10 ${
// //                                 scrolled
// //                                     ? "bg-[linear-gradient(180deg,rgba(18,30,48,0.92),rgba(8,15,28,0.92))] backdrop-blur-xl"
// //                                     : "bg-[linear-gradient(180deg,rgba(18,30,48,0.55),rgba(8,15,28,0.45))] backdrop-blur-md"
// //                             }`}
// //                             style={{
// //                                 boxShadow: scrolled
// //                                     ? "0 1px 0 rgba(255,255,255,0.12) inset, 0 -10px 24px rgba(0,0,0,0.35) inset, 0 18px 40px -10px rgba(0,0,0,0.65), 0 40px 70px -30px rgba(40,110,220,0.35)"
// //                                     : "0 1px 0 rgba(255,255,255,0.10) inset, 0 -8px 20px rgba(0,0,0,0.25) inset, 0 14px 30px -12px rgba(0,0,0,0.5)",
// //                             }}
// //                         >
// //                             {/* Glass sheen + animated top edge (clipped to the plate) */}
// //                             <div
// //                                 className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
// //                                 aria-hidden="true"
// //                             >
// //                                 <div className="gd-sheen absolute inset-y-0 left-0 w-1/3" />
// //                                 <div className="gd-edge absolute inset-x-6 top-0 h-px opacity-80" />
// //                             </div>

// //                             <div className="relative flex h-24 items-center justify-between px-4 sm:px-6 lg:h-28 lg:px-8">
// //                                 <Link
// //                                     to="/"
// //                                     aria-label="GlobalDealz home"
// //                                     className="gd-z-logo hover:[transform:translateZ(64px)_scale(1.03)]"
// //                                 >
// //                                     <BrandMark onDark={true} />
// //                                 </Link>

// //                                 <nav
// //                                     className="gd-z-nav hidden items-center gap-7 lg:flex"
// //                                     aria-label="Main navigation"
// //                                 >
// //                                     {navigation.map(([label, to]) => (
// //                                         <Link
// //                                             key={to}
// //                                             to={to}
// //                                             className="gd-link text-sm text-muted-foreground hover:text-foreground"
// //                                         >
// //                                             {label}
// //                                         </Link>
// //                                     ))}
// //                                 </nav>

// //                                 <div className="gd-z-cta flex items-center gap-2">
// //                                     <Button
// //                                         className="hidden rounded-full px-5 shadow-[0_10px_24px_-8px_rgba(60,140,255,0.7)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
// //                                         onClick={() => openConsultation()}
// //                                         aria-label="Book a consultation"
// //                                     >
// //                                         Book a Consultation
// //                                     </Button>
// //                                     <Button
// //                                         variant="ghost"
// //                                         size="icon"
// //                                         className="rounded-full lg:hidden"
// //                                         onClick={() => setOpen((value) => !value)}
// //                                         aria-label={open ? "Close menu" : "Open menu"}
// //                                         aria-expanded={open}
// //                                     >
// //                                         {open ? <X /> : <Menu />}
// //                                     </Button>
// //                                 </div>
// //                             </div>

// //                             {open && (
// //                                 <nav
// //                                     className="relative rounded-b-2xl border-t border-white/10 px-4 py-4 lg:hidden"
// //                                     aria-label="Mobile navigation"
// //                                 >
// //                                     <div className="flex flex-col gap-1">
// //                                         {navigation.map(([label, to]) => (
// //                                             <Link
// //                                                 key={to}
// //                                                 to={to}
// //                                                 onClick={() => setOpen(false)}
// //                                                 className="rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-white/10"
// //                                             >
// //                                                 {label}
// //                                             </Link>
// //                                         ))}
// //                                         <Button
// //                                             className="mt-3 rounded-full"
// //                                             onClick={() => {
// //                                                 setOpen(false);
// //                                                 openConsultation();
// //                                             }}
// //                                             aria-label="Book a consultation"
// //                                         >
// //                                             Book a Consultation
// //                                         </Button>
// //                                     </div>
// //                                 </nav>
// //                             )}
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </header>
// //     );
// // }




// import { Link } from "@tanstack/react-router";
// import { Menu, X } from "lucide-react";
// import { useEffect, useState, MouseEvent } from "react";

// import { Button } from "@/components/ui/button";
// import { openConsultation } from "@/lib/site-info";

// const navigation = [
//   ["Home", "/"],
//   ["Services", "/services"],
//   ["Infrastructure", "/infrastructure"],
//   ["Joint Ventures", "/joint-ventures"],
//   ["Case Studies", "/case-studies"],
//   ["Pricing", "/pricing"],
//   ["Contact", "/contact"],
// ] as const;

// export function BrandMark({ onDark = false }: { onDark?: boolean | undefined }) {
//   const logoSrc = onDark
//     ? "/globaldealz-header-logo-light.svg"
//     : "/globaldealz-header-logo-dark.svg";

//   return (
//     <span
//       className="inline-flex items-center overflow-visible group"
//       aria-label="GlobalDealz Infrastructure"
//     >
//       <img
//         src={logoSrc}
//         alt="GlobalDealz Infrastructure"
//         /* Increased responsive height and max-width values for a significantly larger logo */
//         className="block h-[72px] w-auto max-w-[260px] object-contain sm:h-[84px] md:h-[96px] lg:h-[104px] xl:h-[112px] transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-z-2"
//         draggable={false}
//         style={{
//           background: "transparent",
//           filter:
//             "drop-shadow(0 12px 28px rgba(3, 11, 22, 0.45)) drop-shadow(0 0 15px rgba(59, 130, 246, 0.3))",
//         }}
//       />
//     </span>
//   );
// }

// export function SiteHeader() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [rotate, setRotate] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     document.documentElement.classList.add("dark");
//     window.localStorage.setItem("globaldealz-theme", "dark");

//     const onScroll = () => setScrolled(window.scrollY > 12);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Creates dynamic 3D perspective tilt following cursor movement
//   const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
//     const card = e.currentTarget.getBoundingClientRect();
//     const centerX = card.left + card.width / 2;
//     const centerY = card.top + card.height / 2;
//     const mouseX = e.clientX - centerX;
//     const mouseY = e.clientY - centerY;

//     setRotate({
//       x: (mouseY / (card.height / 2)) * -6,
//       y: (mouseX / (card.width / 2)) * 6,
//     });
//   };

//   const handleMouseLeave = () => {
//     setRotate({ x: 0, y: 0 });
//   };

//   return (
//     <header
//       className="fixed inset-x-0 top-0 z-50 p-3 sm:p-5 transition-all duration-300"
//       style={{ perspective: "1200px" }}
//     >
//       <div
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         style={{
//           transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
//           transformStyle: "preserve-3d",
//         }}
//         className={`mx-auto flex h-24 max-w-7xl items-center justify-between rounded-2xl px-6 lg:px-10 transition-all duration-300 ease-out animate-pulse-subtle ${
//           scrolled
//             ? "border border-white/10 bg-background/60 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(59,130,246,0.15)]"
//             : "border border-white/5 bg-background/30 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
//         }`}
//       >
//         <Link
//           to="/"
//           aria-label="GlobalDealz home"
//           style={{ transform: "translateZ(30px)" }}
//         >
//           <BrandMark onDark={true} />
//         </Link>

//         <nav
//           className="hidden items-center gap-8 lg:flex"
//           aria-label="Main navigation"
//           style={{ transform: "translateZ(20px)" }}
//         >
//           {navigation.map(([label, to]) => (
//             <Link
//               key={to}
//               to={to}
//               className="relative text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-105 hover:[text-shadow:0_0_12px_rgba(255,255,255,0.6)]"
//             >
//               {label}
//             </Link>
//           ))}
//         </nav>

//         <div
//           className="flex items-center gap-3"
//           style={{ transform: "translateZ(25px)" }}
//         >
//           <Button
//             className="hidden rounded-full px-6 py-6 font-semibold shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] active:scale-95 sm:inline-flex"
//             onClick={() => openConsultation()}
//             aria-label="Book a consultation"
//           >
//             Book a Consultation
//           </Button>
//           <Button
//             variant="ghost"
//             size="icon"
//             className="rounded-full lg:hidden"
//             onClick={() => setOpen((value) => !value)}
//             aria-label={open ? "Close menu" : "Open menu"}
//             aria-expanded={open}
//           >
//             {open ? <X /> : <Menu />}
//           </Button>
//         </div>
//       </div>

//       {open && (
//         <nav
//           className="mt-2 rounded-2xl border border-white/10 bg-background/90 px-5 py-5 backdrop-blur-xl lg:hidden shadow-2xl"
//           aria-label="Mobile navigation"
//         >
//           <div className="mx-auto flex max-w-7xl flex-col gap-1">
//             {navigation.map(([label, to]) => (
//               <Link
//                 key={to}
//                 to={to}
//                 onClick={() => setOpen(false)}
//                 className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-muted"
//               >
//                 {label}
//               </Link>
//             ))}
//             <Button
//               className="mt-3 rounded-full"
//               onClick={() => {
//                 setOpen(false);
//                 openConsultation();
//               }}
//               aria-label="Book a consultation"
//             >
//               Book a Consultation
//             </Button>
//           </div>
//         </nav>
//       )}
//     </header>
//   );
// }



import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState, MouseEvent } from "react";

import { Button } from "@/components/ui/button";
import { openConsultation } from "@/lib/site-info";

const navigation = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Infrastructure", "/infrastructure"],
  ["Joint Ventures", "/joint-ventures"],
  ["Case Studies", "/case-studies"],
  ["Pricing", "/pricing"],
  ["Contact", "/contact"],
] as const;

export function BrandMark({ onDark = false }: { onDark?: boolean | undefined }) {
  const logoSrc = onDark
    ? "/globaldealz-header-logo-light.svg"
    : "/globaldealz-header-logo-dark.svg";

  return (
    <span
      className="relative inline-flex items-center overflow-visible group"
      aria-label="GlobalDealz Infrastructure"
    >
      {/* Backlight ambient halo behind the large logo */}
      <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-600/40 via-indigo-500/30 to-cyan-400/40 opacity-70 blur-xl transition-all duration-500 group-hover:opacity-100 group-hover:scale-115" />

      {/* Prominent logo dimensions */}
      <img
        src={logoSrc}
        alt="GlobalDealz Infrastructure"
        className="relative block h-[84px] w-auto max-w-[280px] object-contain transition-all duration-500 ease-out sm:h-[96px] md:h-[108px] lg:h-[116px] group-hover:scale-108 group-hover:-translate-y-1"
        draggable={false}
        style={{
          background: "transparent",
          filter:
            "drop-shadow(0 14px 28px rgba(0,0,0,0.7)) drop-shadow(0 0 25px rgba(59,130,246,0.6))",
        }}
      />
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.documentElement.classList.add("dark");
    window.localStorage.setItem("globaldealz-theme", "dark");

    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.getBoundingClientRect();
    const centerX = card.left + card.width / 2;
    const centerY = card.top + card.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    setRotate({
      x: (mouseY / (card.height / 2)) * -6,
      y: (mouseX / (card.width / 2)) * 6,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-all duration-300 sm:px-6 lg:px-8"
      style={{ perspective: "1200px" }}
    >
      {/* Expanded container width to max-w-7xl with generous horizontal padding (px-8 lg:px-12) */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: "preserve-3d",
        }}
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-6 py-2.5 transition-all duration-300 ease-out md:px-8 lg:px-12 ${
          scrolled
            ? "border border-white/20 bg-background/75 backdrop-blur-2xl shadow-[0_20px_45px_rgba(0,0,0,0.6),0_0_30px_rgba(59,130,246,0.25)]"
            : "border border-white/10 bg-background/40 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.4)]"
        }`}
      >
        <Link
          to="/"
          aria-label="GlobalDealz home"
          className="z-10 -my-6 flex items-center"
          style={{ transform: "translateZ(45px)" }}
        >
          <BrandMark onDark={true} />
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex xl:gap-9"
          aria-label="Main navigation"
          style={{ transform: "translateZ(20px)" }}
        >
          {navigation.map(([label, to]) => (
            <Link
              key={to}
              to={to}
              className="text-sm font-medium tracking-wide text-muted-foreground transition-all duration-300 hover:text-white hover:scale-105 hover:[text-shadow:0_0_12px_rgba(255,255,255,0.7)]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div
          className="flex items-center gap-3"
          style={{ transform: "translateZ(30px)" }}
        >
          <Button
            className="hidden rounded-full border border-blue-400/40 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 px-6 py-5 text-sm font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] active:scale-95 sm:inline-flex"
            onClick={() => openConsultation()}
            aria-label="Book a consultation"
          >
            Book a Consultation
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <nav
          className="mx-auto mt-2 max-w-7xl rounded-3xl border border-white/15 bg-background/95 px-6 py-5 backdrop-blur-2xl lg:hidden shadow-2xl"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-2">
            {navigation.map(([label, to]) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-semibold transition-colors hover:bg-muted"
              >
                {label}
              </Link>
            ))}
            <Button
              className="mt-2 rounded-full py-5 text-sm font-bold"
              onClick={() => {
                setOpen(false);
                openConsultation();
              }}
              aria-label="Book a consultation"
            >
              Book a Consultation
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}