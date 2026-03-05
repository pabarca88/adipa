import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CategoryFilter } from "@/components/CategoryFilter";
import type { Category } from "@/data/courses";

describe("CategoryFilter", () => {
  it("notifica la categoría seleccionada al hacer click", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    const categories: Category[] = ["Todos", "Psicología Clínica", "Educación"];

    render(
      <CategoryFilter
        categories={categories}
        selectedCategory="Todos"
        onSelect={onSelect}
      />,
    );

    await user.click(screen.getByRole("button", { name: "Filtrar por Educación" }));

    expect(onSelect).toHaveBeenCalledWith("Educación");
  });
});
