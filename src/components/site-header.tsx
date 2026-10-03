import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

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
			className="inline-flex items-center overflow-visible"
			aria-label="GlobalDealz Infrastructure"
		>
			<img
				src={logoSrc}
				alt="GlobalDealz Infrastructure"
				className="block h-9 w-auto max-w-[280px] object-contain sm:h-11 md:h-12"
				draggable={false}
				style={{ background: "transparent" }}
			/>
		</span>
	);
}

export function SiteHeader() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		document.documentElement.classList.add("dark");
		window.localStorage.setItem("globaldealz-theme", "dark");

		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 transition-all ${
				scrolled
					? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
					: "bg-transparent"
			}`}
		>
			<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
				<Link to="/" aria-label="GlobalDealz home">
					<BrandMark onDark={true} />
				</Link>
				<nav
					className="hidden items-center gap-7 lg:flex"
					aria-label="Main navigation"
				>
					{navigation.map(([label, to]) => (
						<Link
							key={to}
							to={to}
							className="text-sm text-muted-foreground transition-colors hover:text-foreground"
						>
							{label}
						</Link>
					))}
				</nav>
				<div className="flex items-center gap-2">
					<Button
						className="hidden rounded-full px-5 sm:inline-flex"
						onClick={() => openConsultation()}
						aria-label="Book a consultation"
					>
						Book a Consultation
					</Button>
					<Button
						variant="ghost"
						size="icon"
						className="rounded-full lg:hidden"
						onClick={() => setOpen((value) => !value)}
						aria-label={open ? "Close menu" : "Open menu"}
						aria-expanded={open}
					>
						{open ? <X /> : <Menu />}
					</Button>
				</div>
			</div>
			{open && (
				<nav
					className="border-t border-border bg-background px-5 py-5 lg:hidden"
					aria-label="Mobile navigation"
				>
					<div className="mx-auto flex max-w-7xl flex-col gap-1">
						{navigation.map(([label, to]) => (
							<Link
								key={to}
								to={to}
								onClick={() => setOpen(false)}
								className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-muted"
							>
								{label}
							</Link>
						))}
						<Button
							className="mt-3 rounded-full"
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
