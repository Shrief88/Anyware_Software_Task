import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { AuthContext } from "../context/AuthContext";
import RequireAuth from "../components/RequireAuth";
import { Navigate } from "react-router-dom";

// Mock the Navigate component
vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  Navigate: vi.fn(() => null),
  useNavigate: () => vi.fn(),
}));

describe("RequireAuth", () => {
  // Create a mock component to wrap
  const MockComponent = () => <div data-testid="protected-component">Protected Content</div>;
  const WrappedComponent = RequireAuth(MockComponent);

  // Mock different auth states
  const renderWithAuth = (isAuthenticated: boolean) => {
    const mockAuthContext = {
      isAuthenticated,
      login: vi.fn(),
      logout: vi.fn(),
    };

    return render(
      <AuthContext.Provider value={mockAuthContext}>
        <WrappedComponent />
      </AuthContext.Provider>
    );
  };

  it("renders protected component when user is authenticated", () => {
    renderWithAuth(true);
    expect(screen.getByTestId("protected-component")).toBeInTheDocument();
    expect(Navigate).not.toHaveBeenCalled();
  });

  it("redirects to home when user is not authenticated", () => {
    renderWithAuth(false);
    expect(Navigate).toHaveBeenCalledWith({ to: "/", replace: true },undefined);
    expect(screen.queryByTestId("protected-component")).not.toBeInTheDocument();
  });
});
