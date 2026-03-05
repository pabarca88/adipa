"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = ["Cursos", "Diplomados", "Recursos", "Contacto"];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[rgba(255,255,255,0.92)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="shrink-0"
          aria-label="ADIPA"
        >
          <Image
            src="/logo-adipa.svg"
            alt="ADIPA"
            width={172}
            height={33}
            className="h-auto w-[148px] sm:w-[172px]"
            priority
          />
        </a>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-8 text-sm font-medium text-[var(--color-text)] md:flex"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={item === "Contacto" ? "#contacto" : "#cursos"}
              className="transition hover:text-[var(--color-primary)]"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contacto"
            className="rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-strong)]"
          >
            Iniciar Sesión
          </a>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-panel"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white/80 text-[var(--color-text)] transition duration-300 hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary-soft)] md:hidden"
        >
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-current transition duration-300 ${
              isMenuOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-current transition duration-200 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-current transition duration-300 ${
              isMenuOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      <div
        id="mobile-nav-panel"
        className={`overflow-hidden border-t border-[var(--color-border)] bg-white/95 transition-all duration-300 ease-out md:hidden ${
          isMenuOpen
            ? "max-h-80 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl px-4 py-4 transition duration-300 sm:px-6 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-2"
          }`}
        >
          <nav aria-label="Principal móvil" className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={item === "Contacto" ? "#contacto" : "#cursos"}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-[var(--color-text)] transition hover:bg-[var(--color-primary-soft)] hover:text-[var(--color-primary)]"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-strong)]"
          >
            Iniciar Sesión
          </a>
        </div>
      </div>
    </header>
  );
}
