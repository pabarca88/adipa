import type { CSSProperties } from "react";
import type { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
  index?: number;
}

function formatPrice(value: number) {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(value);
}

function getModalityDotClass(modality: Course["modality"]) {
  switch (modality) {
    case "Online":
      return "bg-sky-300";
    case "En vivo":
      return "bg-emerald-300";
    case "Presencial":
      return "bg-amber-300";
    default:
      return "bg-white";
  }
}

export function CourseCard({ course, index = 0 }: CourseCardProps) {
  return (
    <article
      className="course-card-animate group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-[var(--color-border)] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_rgba(112,78,253,0.16)]"
      style={{ "--item-index": index } as CSSProperties}
    >
      <div className="relative h-40 overflow-hidden" aria-hidden="true">
        <img
          src={course.imageUrl}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-black/10 to-transparent" />
        <div className="absolute inset-0 flex items-start justify-between p-4">
          <span className="rounded-full bg-white/85 px-2.5 py-1 text-[10px] font-semibold uppercase text-[var(--color-primary)]">
            {course.category}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-primary)] px-2.5 py-1 text-[10px] font-semibold text-white">
            <span
              aria-hidden="true"
              className={`h-2 w-2 rounded-full ${getModalityDotClass(course.modality)}`}
            />
            {course.modality}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex-1">
          <p className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-primary)]">
            <svg
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="h-3.5 w-3.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 2.75V4.5M13.5 2.75V4.5M3.75 7H16.25M5.5 5.25H14.5C15.4665 5.25 16.25 6.0335 16.25 7V14.5C16.25 15.4665 15.4665 16.25 14.5 16.25H5.5C4.5335 16.25 3.75 15.4665 3.75 14.5V7C3.75 6.0335 4.5335 5.25 5.5 5.25Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Inicio: {course.startDate}</span>
          </p>
          <h3 className="mt-2 text-base font-semibold leading-6 text-[var(--color-text)]">
            {course.title}
          </h3>
          <p className="mt-2 text-[13px] leading-5 text-[var(--color-text-muted)]">
            {course.summary}
          </p>
          <p className="mt-3 text-xs text-[var(--color-text-muted)]">
            Instructor:{" "}
            <span className="font-medium text-[var(--color-text)]">{course.instructor}</span>
          </p>
        </div>

        <div className="mt-4 flex items-end justify-between gap-3 border-t border-[var(--color-border)] pt-4">
          <div>
            <p className="text-xs text-[var(--color-text-muted)] line-through">
              {formatPrice(course.originalPrice)}
            </p>
            <p className="text-xl font-semibold text-[var(--color-text)]">
              {formatPrice(course.price)}
            </p>
          </div>

          <a
            href="#"
            aria-label={`Ver detalles del curso ${course.title}`}
            className="rounded-full bg-[var(--color-primary)] px-3.5 py-2 text-xs font-semibold text-white transition group-hover:bg-[var(--color-primary-strong)]"
          >
            Ver curso
          </a>
        </div>
      </div>
    </article>
  );
}
