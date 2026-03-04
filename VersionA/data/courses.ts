export type Category =
  | "Todos"
  | "Psicología Clínica"
  | "Educación"
  | "Liderazgo y Bienestar";

export type CourseCategory = Exclude<Category, "Todos">;
export type Modality = "Online" | "En vivo" | "Presencial";

export interface Course {
  id: number;
  title: string;
  category: CourseCategory;
  instructor: string;
  startDate: string;
  modality: Modality;
  originalPrice: number;
  price: number;
  summary: string;
  imageClassName: string;
}

export const categories: Category[] = [
  "Todos",
  "Psicología Clínica",
  "Educación",
  "Liderazgo y Bienestar",
];

export const courses: Course[] = [
  {
    id: 1,
    title: "Intervención breve en ansiedad y estrés académico",
    category: "Psicología Clínica",
    instructor: "Dra. Camila Rojas",
    startDate: "12 de abril",
    modality: "En vivo",
    originalPrice: 89990,
    price: 64990,
    summary:
      "Herramientas prácticas para abordar casos frecuentes en consulta con adultos jóvenes.",
    imageClassName: "from-sky-500 via-cyan-400 to-emerald-300",
  },
  {
    id: 2,
    title: "Actualización en trauma complejo y regulación emocional",
    category: "Psicología Clínica",
    instructor: "Mg. Valentina Perez",
    startDate: "18 de abril",
    modality: "Online",
    originalPrice: 109990,
    price: 79990,
    summary:
      "Un recorrido aplicado por evaluación, formulación clínica y estrategias de intervención.",
    imageClassName: "from-indigo-500 via-sky-500 to-cyan-300",
  },
  {
    id: 3,
    title: "Diseño universal para el aprendizaje en aula diversa",
    category: "Educación",
    instructor: "Prof. Martina Salgado",
    startDate: "22 de abril",
    modality: "En vivo",
    originalPrice: 75990,
    price: 54990,
    summary:
      "Planifica experiencias inclusivas con estrategias concretas y evaluación flexible.",
    imageClassName: "from-amber-400 via-orange-400 to-rose-400",
  },
  {
    id: 4,
    title: "Neurodidáctica aplicada a la motivación escolar",
    category: "Educación",
    instructor: "Dr. Diego Mena",
    startDate: "27 de abril",
    modality: "Online",
    originalPrice: 82990,
    price: 59990,
    summary:
      "Conecta evidencia, emoción y aprendizaje para mejorar el compromiso en clases.",
    imageClassName: "from-fuchsia-500 via-pink-400 to-orange-300",
  },
  {
    id: 5,
    title: "Liderazgo colaborativo para equipos de salud",
    category: "Liderazgo y Bienestar",
    instructor: "Ps. Fernanda Gatica",
    startDate: "03 de mayo",
    modality: "Presencial",
    originalPrice: 129990,
    price: 94990,
    summary:
      "Desarrolla conversaciones de alto impacto, coordinación y cultura de confianza.",
    imageClassName: "from-emerald-500 via-teal-400 to-lime-300",
  },
  {
    id: 6,
    title: "Prevención del burnout y bienestar organizacional",
    category: "Liderazgo y Bienestar",
    instructor: "Mg. Sebastian Leal",
    startDate: "08 de mayo",
    modality: "Online",
    originalPrice: 96990,
    price: 69990,
    summary:
      "Métricas, intervenciones y prácticas sostenibles para equipos con alta demanda.",
    imageClassName: "from-violet-500 via-purple-400 to-pink-300",
  },
  {
    id: 7,
    title: "Evaluación clínica infantojuvenil con enfoque integrativo",
    category: "Psicología Clínica",
    instructor: "Dra. Antonia Fuentes",
    startDate: "11 de mayo",
    modality: "En vivo",
    originalPrice: 99990,
    price: 73990,
    summary:
      "Integra entrevista, escalas y devolución a familias desde una mirada actual.",
    imageClassName: "from-blue-600 via-sky-500 to-teal-300",
  },
  {
    id: 8,
    title: "Estrategias de convivencia escolar y mediación",
    category: "Educación",
    instructor: "Prof. Nicolas Verdugo",
    startDate: "17 de mayo",
    modality: "Presencial",
    originalPrice: 78990,
    price: 56990,
    summary:
      "Modelos preventivos y protocolos de acción para contextos educativos complejos.",
    imageClassName: "from-rose-500 via-orange-400 to-amber-300",
  },
];
