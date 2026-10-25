import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [lastLocation, setLastLocation] = useState(location.href);
  if (lastLocation !== location.href) {
    setLastLocation(location.href);
    setOpen(false);
  }
  return (
    <nav className="sticky top-0 z-50 bg-charcoal border-b border-paper/10">
      <div className="max-w-site mx-auto flex items-center justify-between gap-5 px-7 py-3.5">
        <Link to="/" className="flex items-center gap-3 text-paper no-underline">
          <img
            src="/assets/ai_logo.png"
            alt="AI Club logo"
            className="w-10 h-10 flex-none object-contain"
          />
          <span className="font-display font-bold tracking-wide text-[1.05rem]">AI CLUB</span>
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex border border-sand text-paper rounded-sm font-mono text-sm px-3 py-2"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label="Toggle navigation"
        >
          MENU
        </button>
        <ul
          id="nav-menu"
          className={`${open ? "flex" : "hidden"} md:flex items-center list-none m-0 p-0 font-mono text-[.82rem] tracking-wide uppercase absolute md:static top-[64px] left-0 right-0 md:top-auto flex-col md:flex-row bg-charcoal md:bg-transparent px-7 md:px-0 py-4 md:py-0 border-b md:border-0 border-paper/10 gap-4 md:gap-7`}
        >
          {(
            [
              ["/", "Home"],
              ["/about/", "About"],
              ["/events/", "Events"],
            ] as const
          ).map(([to, label]) => (
            <li key={to}>
              <Link
                to={to}
                activeOptions={{ exact: true }}
                inactiveProps={{
                  className: "text-sand hover:text-paper py-1 no-underline transition-colors",
                }}
                activeProps={{
                  className:
                    "relative text-paper py-1 no-underline after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:bg-brick",
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/about/"
          hash="join"
          className="hidden md:inline-flex items-center gap-2 font-mono text-[.8rem] tracking-wide uppercase px-5 py-2.5 rounded-sm bg-linear-to-r from-brick to-brickdk text-paper no-underline hover:from-brickdk hover:to-brick hover:-translate-y-0.5 transition"
        >
          Join Us
        </Link>
      </div>
    </nav>
  );
}
