import type { Category } from "@/data/courses";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: Category;
  onSelect: (category: Category) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelect,
}: CategoryFilterProps) {
  return (
    <section
      aria-labelledby="categorias-heading"
      className="self-start lg:sticky lg:top-22"
    >
      <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[0_18px_40px_rgba(112,78,253,0.06)]">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-text-muted)]">
          Explora
        </p>
        <h2
          id="categorias-heading"
          className="mt-2 text-xl font-semibold leading-7 tracking-tight text-[var(--color-primary)]"
        >
          Cursos que te permitirán potenciar tu carrera.
        </h2>

        <div className="mt-5 space-y-2" role="group" aria-label="Filtrar cursos por categoría">
          {categories.map((category) => {
            const isActive = category === selectedCategory;

            return (
              <button
                key={category}
                type="button"
                aria-current={isActive ? "page" : undefined}
                aria-pressed={isActive}
                aria-label={`Filtrar por ${category}`}
                onClick={() => onSelect(category)}
                className={`filter-chip flex w-full cursor-pointer items-center justify-between rounded-xl border px-3 py-2.5 text-left text-[13px] font-medium ${
                  isActive
                    ? "border-[var(--color-primary)] bg-[var(--color-primary-soft)] text-[var(--color-primary)]"
                    : "border-[var(--color-border)] bg-[var(--color-surface-soft)] text-[var(--color-text)] hover:border-[var(--color-primary)]/50"
                }`}
              >
                {category}
                <span className="text-base leading-none"></span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
