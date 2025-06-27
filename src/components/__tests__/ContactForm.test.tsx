/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "../../test/test-utils";
import ContactForm from "../ContactForm";

// Mock framer-motion
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    form: ({ children, ...props }: any) => <form {...props}>{children}</form>,
    button: ({ children, ...props }: any) => (
      <button {...props}>{children}</button>
    ),
  },
}));

describe("ContactForm - Simple Tests", () => {
  it("renders the form", () => {
    render(<ContactForm />);

    expect(
      screen.getByText(
        /Pronto para cuidar da saúde e segurança da sua empresa?/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /solicitar contato/i })
    ).toBeInTheDocument();
  });
});
