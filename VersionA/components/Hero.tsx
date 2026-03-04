export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[var(--color-border)] bg-[linear-gradient(135deg,#6d49fb_0%,#704efd_48%,#8e77ff_100%)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.1),_transparent_26%)]" />
      <div className="relative mx-auto flex max-w-7xl justify-center px-4 py-18 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
            Formación Continua
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight leading-14 text-white sm:text-3xl lg:text-5xl">
            Cursos de Psicología con Certificado en 2026
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-7 text-white/85">
            Vive la mejor experiencia de aprendizaje y potencia tus conocimientos a través de nuestros cursos y diplomados.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#cursos"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--color-primary)] transition hover:-translate-y-0.5"
            >
              Explorar cursos
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Solicitar información
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
