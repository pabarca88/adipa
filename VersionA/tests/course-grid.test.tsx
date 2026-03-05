import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CourseGrid } from "@/components/CourseGrid";
import { courses } from "@/data/courses";

describe("CourseGrid", () => {
  it("muestra total real y permite ordenar y paginar", async () => {
    const user = userEvent.setup();
    const onSortChange = vi.fn();
    const onPageChange = vi.fn();

    render(
      <CourseGrid
        courses={courses.slice(0, 6)}
        totalCourses={14}
        selectedSort="Todos"
        onSortChange={onSortChange}
        currentPage={1}
        totalPages={3}
        onPageChange={onPageChange}
      />,
    );

    expect(screen.getByText(/14 cursos disponibles/i)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Todos" }));
    await user.click(screen.getByRole("option", { name: "Menor Precio" }));
    expect(onSortChange).toHaveBeenCalledWith("Menor Precio");

    await user.click(screen.getByRole("button", { name: "Siguiente" }));
    expect(onPageChange).toHaveBeenCalledWith(2);
  });
});
