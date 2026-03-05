"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Ingresa un nombre con al menos 2 caracteres.";
  }

  if (!values.email.trim()) {
    errors.email = "El email es obligatorio.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Ingresa un email válido.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "El mensaje debe tener al menos 10 caracteres.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange =
    (field: keyof FormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      const nextValues = { ...values, [field]: event.target.value };
      setValues(nextValues);
      setErrors((currentErrors) => ({ ...currentErrors, [field]: undefined }));
      setSuccessMessage("");
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSuccessMessage("");
      return;
    }

    setValues(initialValues);
    setSuccessMessage(
      "Tu mensaje fue enviado correctamente. Te contactaremos pronto.",
    );
  };

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-heading"
      className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_24px_60px_rgba(112,78,253,0.08)]"
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-2">
        <div>
          <h2
            id="contacto-heading"
            className="text-3xl font-semibold tracking-tight text-[var(--color-text]"
          >
            Hablemos sobre tu próximo curso
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-text-muted)]">
            Si necesitas orientación para elegir un programa, deja tus datos y
            te escribiremos con recomendaciones según tu perfil profesional.
          </p>

          <div className="mt-8 space-y-4 text-sm text-[var(--color-text)]">
            <p className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-soft)] p-4">
              Respuesta estimada: dentro de 24 horas hábiles.
            </p>
            <p className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-soft)] p-4">
              Modalidades disponibles: online asincrónico, clases en vivo y
              talleres presenciales.
            </p>
          </div>
        </div>

        <form
          noValidate
          onSubmit={handleSubmit}
          className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-soft)] p-5"
        >
          {successMessage ? (
            <div
              role="status"
              className="mb-5 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-700"
            >
              {successMessage}
            </div>
          ) : null}

          <div className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-[var(--color-text)]"
              >
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange("name")}
                className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] placeholder:text-slate-400 transition duration-200 hover:border-[var(--color-primary)]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
                placeholder="Tu nombre"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name ? (
                <p id="name-error" className="mt-2 text-sm text-rose-300">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[var(--color-text)]"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange("email")}
                className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] placeholder:text-slate-400 transition duration-200 hover:border-[var(--color-primary)]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
                placeholder="tu@email.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email ? (
                <p id="email-error" className="mt-2 text-sm text-rose-300">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-[var(--color-text)]"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={handleChange("message")}
                className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] placeholder:text-slate-400 transition duration-200 hover:border-[var(--color-primary)]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
                placeholder="Cuéntanos qué tipo de curso buscas."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message ? (
                <p id="message-error" className="mt-2 text-sm text-rose-300">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--color-primary-strong)]"
            >
              Enviar consulta
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
