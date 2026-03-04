"use client";

import { CategoryFilter } from "@/components/CategoryFilter";
import { ContactForm } from "@/components/ContactForm";
import { CourseGrid } from "@/components/CourseGrid";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { categories, courses, type Category } from "@/data/courses";
import { useState } from "react";

export type SortOption =
  | "Todos"
  | "Mayor Precio"
  | "Menor Precio"
  | "Más próximo"
  | "Menos próximo";

const monthMap: Record<string, number> = {
  enero: 0,
  febrero: 1,
  marzo: 2,
  abril: 3,
  mayo: 4,
  junio: 5,
  julio: 6,
  agosto: 7,
  septiembre: 8,
  octubre: 9,
  noviembre: 10,
  diciembre: 11,
};

function parseCourseDate(value: string) {
  const [day, , month] = value.toLowerCase().split(" ");
  return new Date(2026, monthMap[month] ?? 0, Number(day));
}

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Todos");
  const [selectedSort, setSelectedSort] = useState<SortOption>("Todos");

  const filteredCourses =
    selectedCategory === "Todos"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  const sortedCourses = [...filteredCourses].sort((left, right) => {
    switch (selectedSort) {
      case "Mayor Precio":
        return right.price - left.price;
      case "Menor Precio":
        return left.price - right.price;
      case "Más próximo":
        return (
          parseCourseDate(left.startDate).getTime() -
          parseCourseDate(right.startDate).getTime()
        );
      case "Menos próximo":
        return (
          parseCourseDate(right.startDate).getTime() -
          parseCourseDate(left.startDate).getTime()
        );
      default:
        return 0;
    }
  });

  return (
    <main>
      <Header />
      <Hero />
      <section className="mx-auto mt-8 grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:px-8">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <CourseGrid
          courses={sortedCourses}
          selectedSort={selectedSort}
          onSortChange={setSelectedSort}
        />
      </section>
      <section className="mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
}
