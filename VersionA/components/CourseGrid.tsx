"use client";

import type { SortOption } from "@/app/page";
import { CourseCard } from "@/components/CourseCard";
import type { Course } from "@/data/courses";
import { useEffect, useRef, useState } from "react";

const sortOptions: SortOption[] = [
  "Todos",
  "Mayor Precio",
  "Menor Precio",
  "Más próximo",
  "Menos próximo",
];

interface CourseGridProps {
  courses: Course[];
  totalCourses: number;
  selectedSort: SortOption;
  onSortChange: (value: SortOption) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function CourseGrid({
  courses,
  totalCourses,
  selectedSort,
  onSortChange,
  currentPage,
  totalPages,
  onPageChange,
}: CourseGridProps) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <section
      id="cursos"
      aria-labelledby="cursos-heading"
      className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[0_18px_40px_rgba(112,78,253,0.06)]"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2
            id="cursos-heading"
            className="text-2xl font-semibold tracking-tight text-[var(--color-primary)]"
          >
            Catálogo destacado
          </h2>
          <p className="mt-1 text-xs leading-5 text-[var(--color-text-muted)]">
            {totalCourses} cursos disponibles con enfoque práctico y docentes
            especializados.
          </p>
        </div>

        <div ref={wrapperRef} className="relative min-w-[190px]">
          <p className="text-[10px] font-semibold uppercase text-[var(--color-text-muted)]">
            Ordenar por
          </p>
          <button
            type="button"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-controls="sort-options-list"
            onClick={() => setIsOpen((current) => !current)}
            className="mt-1 flex w-full cursor-pointer items-center justify-between gap-4 rounded-xl bg-[var(--color-surface-soft)] px-4 py-3 text-left transition duration-200 hover:bg-[var(--color-primary-soft)]"
          >
            <span className="text-[14px] font-semibold text-[var(--color-text)]">
              {selectedSort}
            </span>
            <svg
              viewBox="0 0 20 20"
              aria-hidden="true"
              className={`h-4 w-4 text-[var(--color-text)] transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 12.25L10 6.75L15.5 12.25"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            id="sort-options-list"
            role="listbox"
            aria-label="Opciones de orden"
            aria-hidden={!isOpen}
            className={`absolute right-0 z-10 mt-3 w-full overflow-hidden rounded-[1.5rem] border border-black/8 bg-[#f5f4f4] py-2 shadow-[0_18px_40px_rgba(0,0,0,0.08)] transition-all duration-220 ease-out ${
              isOpen
                ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                : "pointer-events-none -translate-y-1 scale-[0.98] opacity-0"
            }`}
          >
            {sortOptions.map((option, index) => (
              <button
                key={option}
                type="button"
                role="option"
                aria-selected={selectedSort === option}
                tabIndex={isOpen ? 0 : -1}
                onClick={() => {
                  onSortChange(option);
                  setIsOpen(false);
                }}
                className={`block w-full cursor-pointer px-4 py-3 text-left text-sm text-[var(--color-text)] transition hover:bg-black/3 ${
                  index === 0 ? "border-b border-black/10" : ""
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid-animate mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} />
        ))}
      </div>

      <nav
        className="mt-6 flex flex-wrap items-center justify-center gap-2"
        aria-label="Paginación de cursos"
      >
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="cursor-pointer rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-2 text-xs font-semibold text-[var(--color-text)] transition hover:border-[var(--color-primary)]/50 disabled:cursor-not-allowed disabled:opacity-45"
        >
          Anterior
        </button>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => {
          const isActive = page === currentPage;

          return (
            <button
              key={page}
              type="button"
              aria-label={`Ir a la página ${page}`}
              aria-current={isActive ? "page" : undefined}
              onClick={() => onPageChange(page)}
              className={`h-9 min-w-9 cursor-pointer rounded-full px-3 text-xs font-semibold transition ${
                isActive
                  ? "bg-[var(--color-primary)] text-white"
                  : "border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:border-[var(--color-primary)]/50"
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="cursor-pointer rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-2 text-xs font-semibold text-[var(--color-text)] transition hover:border-[var(--color-primary)]/50 disabled:cursor-not-allowed disabled:opacity-45"
        >
          Siguiente
        </button>
      </nav>
    </section>
  );
}
