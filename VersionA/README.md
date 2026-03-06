# VersionA - Next.js

Proyecto frontend en Next.js con App Router, TypeScript estricto y Tailwind CSS.

## Demo

Producción (Vercel):  
https://adipa.vercel.app/

## Requisitos

- Node.js 18+ (recomendado 20+)
- npm 9+

## Instalación

Desde la raíz del repositorio:

```bash
cd VersionA
npm install
```

## Desarrollo

Levantar servidor local:

```bash
cd VersionA
npm run dev
```

URL local por defecto:

`http://localhost:3000`

## Build de producción

Generar build:

```bash
cd VersionA
npm run build
```

Levantar build generado:

```bash
cd VersionA
npm run start
```

## Tests (unitarios / integración)

Ejecutar tests una vez:

```bash
cd VersionA
npm test
```

Ejecutar tests en modo watch:

```bash
cd VersionA
npm run test:watch
```

## Otros comandos útiles

Lint:

```bash
cd VersionA
npm run lint
```

## Arquitectura

Estructura principal:

- `app/`
  - Entrypoints del App Router (`layout.tsx`, `page.tsx`) y estilos globales.
- `components/`
  - Componentes reutilizables de UI (header, hero, grilla, cards, filtros, formulario, footer).
- `data/`
  - Datos tipados de dominio (categorías, cursos, etc.).
- `public/`
  - Assets estáticos servidos directamente (por ejemplo, `logo-adipa.svg`).
- `tests/`
  - Tests unitarios/de integración con Vitest + Testing Library.
