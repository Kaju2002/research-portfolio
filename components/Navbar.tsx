"use client";

import Image from "next/image";
import Link, { useLinkStatus } from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/research";

function Underline({ active }: { active: boolean }) {
  const { pending } = useLinkStatus();
  const state = active
    ? "scale-x-100 bg-primary"
    : pending
      ? "scale-x-100 bg-primary/30 animate-pulse"
      : "scale-x-0 bg-primary/30 group-hover:scale-x-100";
  return (
    <span
      aria-hidden
      className={`absolute inset-x-2.5 bottom-3.5 h-[2.5px] origin-center rounded-full transition-transform duration-300 xl:inset-x-3.5 ${state}`}
    />
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/sliit-logo.jpg"
            alt="SLIIT logo"
            width={474}
            height={127}
            loading="eager"
            className="h-9 w-auto"
          />
          <span className="hidden h-8 w-px bg-border xl:block" />
          <span className="hidden leading-tight xl:block">
            <span className="block font-display text-[15px] font-bold text-primary">
              {site.shortName}
            </span>
            <span className="block text-[11px] font-medium text-muted">
              {site.groupId}
            </span>
          </span>
        </Link>

        <ul className="hidden h-full items-center lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href} className="h-full">
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative flex h-full items-center px-2.5 text-sm transition-colors xl:px-3.5 ${
                    active
                      ? "font-semibold text-primary"
                      : "font-medium text-foreground/70 hover:text-primary"
                  }`}
                >
                  {link.label}
                  <Underline active={active} />
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl text-primary transition-colors hover:bg-primary-light lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/70 bg-white lg:hidden">
          <ul className="mx-auto grid max-w-7xl gap-1 px-5 py-4 sm:px-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`block border-l-[3px] px-4 py-3 text-sm transition-colors ${
                      active
                        ? "border-primary bg-primary-soft font-semibold text-primary"
                        : "border-transparent font-medium text-foreground/80 hover:bg-primary-soft hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
