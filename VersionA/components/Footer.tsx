import Image from "next/image";

const footerLinks = ["Cursos", "Diplomados", "Recursos", "Contacto"];
const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 0 0 3.28 4.97c0 1.08.87 1.97 1.94 1.97h.03A1.98 1.98 0 0 0 7.22 4.97 1.97 1.97 0 0 0 5.25 3ZM20.44 13.07c0-3.46-1.85-5.07-4.31-5.07-1.99 0-2.88 1.1-3.38 1.87V8.5H9.37c.04.91 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.67.88-1.37 1.9-1.37 1.34 0 1.88 1.03 1.88 2.54V20h3.38v-6.93Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3.25"
          y="3.25"
          width="17.5"
          height="17.5"
          rx="5.25"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
        <path d="M21.58 7.19a2.98 2.98 0 0 0-2.1-2.11C17.63 4.5 12 4.5 12 4.5s-5.63 0-7.48.58a2.98 2.98 0 0 0-2.1 2.11A31.2 31.2 0 0 0 2 12a31.2 31.2 0 0 0 .42 4.81 2.98 2.98 0 0 0 2.1 2.11c1.85.58 7.48.58 7.48.58s5.63 0 7.48-.58a2.98 2.98 0 0 0 2.1-2.11A31.2 31.2 0 0 0 22 12a31.2 31.2 0 0 0-.42-4.81ZM10.2 15.36V8.64L15.82 12l-5.62 3.36Z" />
      </svg>
    ),
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <Image
            src="/logo-adipa.svg"
            alt="ADIPA"
            width={110}
            height={21}
            className="h-auto w-[110px]"
          />
          <p className="mt-3 max-w-md text-sm leading-6 text-[var(--color-text-muted)]">
            Formación aplicada para profesionales que buscan especializarse con
            criterios actuales y experiencia docente relevante.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text)]">Links</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.map((link) => (
                <li key={link}>
                  <a
                    href={link === "Contacto" ? "#contacto" : "#cursos"}
                    className="text-sm text-[var(--color-text-muted)] transition hover:text-[var(--color-primary)]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text)]">Redes</h3>
            <ul className="mt-3 flex items-center gap-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-label={link.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-soft)] text-[var(--color-text-muted)] transition hover:border-[var(--color-primary)]/40 hover:text-[var(--color-primary)]"
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--color-border)] bg-[var(--color-surface-soft)]">
        <p className="mx-auto max-w-7xl px-4 py-4 text-center text-xs text-[var(--color-text-muted)] sm:px-6 lg:px-8">
          {`© ${year} ADIPA. Todos los derechos reservados.`}
        </p>
      </div>
    </footer>
  );
}
