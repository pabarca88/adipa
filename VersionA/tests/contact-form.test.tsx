import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "@/components/ContactForm";

describe("ContactForm", () => {
  it("envía correctamente con datos válidos", async () => {
    const user = userEvent.setup();

    render(<ContactForm />);

    await user.type(screen.getByLabelText("Nombre"), "Pablo");
    await user.type(screen.getByLabelText("Email"), "pablo@test.com");
    await user.type(
      screen.getByLabelText("Mensaje"),
      "Quiero información sobre cursos de evaluación clínica.",
    );
    await user.click(screen.getByRole("button", { name: "Enviar consulta" }));

    expect(
      screen.getByText("Tu mensaje fue enviado correctamente. Te contactaremos pronto."),
    ).toBeInTheDocument();
  });
});
