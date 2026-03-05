"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = ["Cursos", "Diplomados", "Recursos", "Contacto"];
type ThemeMode = "light" | "dark";

function ThemeToggleButton({
  theme,
  onToggle,
  className,
}: {
  theme: ThemeMode;
  onToggle: () => void;
  className?: string;
}) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      aria-pressed={isDark}
      onClick={onToggle}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-soft)] text-[var(--color-text)] transition duration-300 hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary-soft)] ${className ?? ""}`}
    >
      {isDark ? (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3.5V5.5M12 18.5V20.5M5.99 5.99L7.4 7.4M16.6 16.6L18.01 18.01M3.5 12H5.5M18.5 12H20.5M5.99 18.01L7.4 16.6M16.6 7.4L18.01 5.99M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.25 14.31A8.75 8.75 0 1 1 9.69 3.75C9.58 4.28 9.52 4.82 9.52 5.38C9.52 9.74 13.06 13.28 17.42 13.28C17.98 13.28 18.53 13.22 19.06 13.11C19.44 13.03 19.88 13.36 19.87 13.75C19.86 13.95 19.99 14.17 20.25 14.31Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [themeHydrated, setThemeHydrated] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const initialTheme: ThemeMode =
      savedTheme === "dark" || savedTheme === "light"
        ? savedTheme
        : "light";

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
    setThemeHydrated(true);
  }, []);

  useEffect(() => {
    if (!themeHydrated) return;

    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme, themeHydrated]);

  const toggleTheme = () =>
    setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-surface)] backdrop-blur">
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

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggleButton theme={theme} onToggle={toggleTheme} />
          <a
            href="#contacto"
            className="rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-strong)]"
          >
            Iniciar Sesión
          </a>
        </div>

        <ThemeToggleButton
          theme={theme}
          onToggle={toggleTheme}
          className="md:hidden"
        />

        <button
          type="button"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-panel"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-soft)] text-[var(--color-text)] transition duration-300 hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary-soft)] md:hidden"
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
        className={`overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-300 ease-out md:hidden ${
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
