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
  selectedSort: SortOption;
  onSortChange: (value: SortOption) => void;
}

export function CourseGrid({
  courses,
  selectedSort,
  onSortChange,
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
            {courses.length} cursos disponibles con enfoque práctico y docentes
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
            onClick={() => setIsOpen((current) => !current)}
            className="mt-1 flex w-full items-center justify-between gap-4 rounded-xl bg-[var(--color-surface-soft)] px-4 py-3 text-left"
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

          {isOpen ? (
            <div className="absolute right-0 z-10 mt-3 w-full overflow-hidden rounded-[1.5rem] border border-black/8 bg-[#f5f4f4] py-2 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
              {sortOptions.map((option, index) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    onSortChange(option);
                    setIsOpen(false);
                  }}
                  className={`block w-full px-4 py-3 text-left text-sm text-[var(--color-text)] transition hover:bg-black/3 ${
                    index === 0 ? "border-b border-black/10" : ""
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
