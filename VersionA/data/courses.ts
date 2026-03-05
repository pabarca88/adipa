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
  imageUrl: string;
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
    imageUrl: "https://unsplash.it/640/425?image=100",
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
    imageUrl: "https://unsplash.it/640/425?image=101",
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
    imageUrl: "https://unsplash.it/640/425?image=102",
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
    imageUrl: "https://unsplash.it/640/425?image=103",
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
    imageUrl: "https://unsplash.it/640/425?image=104",
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
    imageUrl: "https://unsplash.it/640/425?image=106",
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
    imageUrl: "https://unsplash.it/640/425?image=107",
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
    imageUrl: "https://unsplash.it/640/425?image=108",
  },
  {
    id: 9,
    title: "Evaluación neuropsicológica en adultos mayores",
    category: "Psicología Clínica",
    instructor: "Dra. Javiera Molina",
    startDate: "24 de mayo",
    modality: "Online",
    originalPrice: 119990,
    price: 86990,
    summary:
      "Protocolos de evaluación, interpretación de resultados y comunicación clínica en contextos de envejecimiento.",
    imageUrl: "https://unsplash.it/640/425?image=109",
  },
  {
    id: 10,
    title: "Intervenciones breves en crisis y primeros auxilios psicológicos",
    category: "Psicología Clínica",
    instructor: "Ps. Tomás Herrera",
    startDate: "29 de mayo",
    modality: "En vivo",
    originalPrice: 94990,
    price: 68990,
    summary:
      "Modelos de respuesta inmediata, contención y derivación segura para distintos escenarios de emergencia.",
    imageUrl: "https://unsplash.it/640/425?image=110",
  },
  {
    id: 11,
    title: "Evaluación auténtica y retroalimentación efectiva en educación superior",
    category: "Educación",
    instructor: "Mg. Carla Bustos",
    startDate: "02 de junio",
    modality: "Online",
    originalPrice: 82990,
    price: 58990,
    summary:
      "Diseña instrumentos y estrategias de feedback que mejoren aprendizaje y compromiso en aula universitaria.",
    imageUrl: "https://unsplash.it/640/425?image=111",
  },
  {
    id: 12,
    title: "Planificación didáctica inclusiva con apoyo de tecnologías educativas",
    category: "Educación",
    instructor: "Prof. Daniela Muñoz",
    startDate: "07 de junio",
    modality: "Presencial",
    originalPrice: 88990,
    price: 62990,
    summary:
      "Integra herramientas digitales y metodologías activas para atender diversidad y participación en clase.",
    imageUrl: "https://unsplash.it/640/425?image=112",
  },
  {
    id: 13,
    title: "Comunicación estratégica para líderes de equipos interdisciplinarios",
    category: "Liderazgo y Bienestar",
    instructor: "Mg. Renato Díaz",
    startDate: "12 de junio",
    modality: "En vivo",
    originalPrice: 99990,
    price: 71990,
    summary:
      "Técnicas para conversaciones difíciles, alineamiento de objetivos y coordinación efectiva en equipos complejos.",
    imageUrl: "https://unsplash.it/640/425?image=113",
  },
  {
    id: 14,
    title: "Cultura organizacional saludable y prevención de riesgos psicosociales",
    category: "Liderazgo y Bienestar",
    instructor: "Ps. Francisca León",
    startDate: "18 de junio",
    modality: "Online",
    originalPrice: 104990,
    price: 75990,
    summary:
      "Herramientas para diagnóstico de clima, diseño de acciones preventivas y seguimiento de bienestar laboral.",
    imageUrl: "https://unsplash.it/640/425?image=114",
  },
];
