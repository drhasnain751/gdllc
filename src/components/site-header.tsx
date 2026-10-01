import { Link } from "@tanstack/react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const navigation = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Infrastructure", "/infrastructure"],
  ["Joint Ventures", "/joint-ventures"],
  ["Case Studies", "/case-studies"],
  ["Pricing", "/pricing"],
] as const;

export function BrandMark({ onDark = false }: { onDark?: boolean | undefined }) {
  const textColor = onDark ? "#F8FBFF" : "#0F1F3B";
  const accentColor = onDark ? "#D9E7FF" : "#415570";
  const markColor = "#F4F8FF";
  const badgeColor = "#0B1F3C";

  return (
    <span className="inline-flex items-center" aria-label="GlobalDealz Infrastructure">
      <svg
        viewBox="0 0 820 220"
        className="h-14 w-auto"
        role="img"
        aria-label="GlobalDealz Infrastructure"
      >
        <rect x="8" y="18" width="180" height="180" rx="36" fill={badgeColor} />
        <text
          x="98"
          y="135"
          textAnchor="middle"
          fill={markColor}
          fontSize="118"
          fontWeight="800"
          fontFamily="Inter, Arial, sans-serif"
        >
          G
        </text>
        <rect x="133" y="124" width="28" height="28" rx="6" fill="#5AB7F4" />
        <text
          x="225"
          y="118"
          fill={textColor}
          fontSize="78"
          fontWeight="800"
          letterSpacing="-2"
          fontFamily="Inter, Arial, sans-serif"
        >
          GLOBALDEALZ
        </text>
        <text
          x="228"
          y="170"
          fill={accentColor}
          fontSize="27"
          fontWeight="500"
          letterSpacing="14"
          fontFamily="Inter, Arial, sans-serif"
        >
          INFRASTRUCTURE
        </text>
      </svg>
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("globaldealz-theme");
    const nextDark = stored === "dark";
    document.documentElement.classList.toggle("dark", nextDark);
    setDark(nextDark);
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("globaldealz-theme", next ? "dark" : "light");
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "border-b border-border/70 bg-background/85 backdrop-blur-xl" : "bg-transparent"}`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" aria-label="GlobalDealz home">
          <BrandMark onDark={dark} />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
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
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={toggleTheme}
            aria-label={dark ? "Use light theme" : "Use dark theme"}
          >
            {dark ? <Sun /> : <Moon />}
          </Button>
          <Button asChild className="hidden rounded-full px-5 sm:inline-flex">
            <Link to="/" hash="consultation">
              Book a Consultation
            </Link>
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
            <Button asChild className="mt-3 rounded-full">
              <Link to="/" hash="consultation" onClick={() => setOpen(false)}>
                Book a Consultation
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
