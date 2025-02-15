import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { AuthProvider } from "../context/AuthContext";
import Home from "../pages/Home";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Home Component", () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <AuthProvider>{children}</AuthProvider>
  );

  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it("renders welcome message", () => {
    render(<Home />, { wrapper });
    expect(screen.getByText("Welcome to Coligo")).toBeInTheDocument();
  });

  it("renders get started button", () => {
    render(<Home />, { wrapper });
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("navigates to dashboard on button click", () => {
    render(<Home />, { wrapper });
    const button = screen.getByRole("button", { name: /login/i });
    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith("/dashboard");
  });

  it("displays the welcome description", () => {
    render(<Home />, { wrapper });
    expect(screen.getByText(/your gateway/i)).toBeInTheDocument();
  });
});
