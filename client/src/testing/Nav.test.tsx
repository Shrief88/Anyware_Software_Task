import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { AuthProvider } from "../../src/context/AuthContext";
import Nav from "../components/layout/Nav";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Nav Component", () => {
  const defaultProps = {
    mobileOpen: false,
    handleDrawerToggle: vi.fn(),
    isMobile: false,
  };

  const renderNav = (props = defaultProps) => {
    render(
      <AuthProvider>
        <Nav {...props} />
      </AuthProvider>
    );
  };

  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it("renders logout button", () => {
    renderNav();
    expect(screen.getAllByText("Logout")[0]).toBeInTheDocument();
  });

  it("handles logout correctly", () => {
    renderNav();
    const logoutButton = screen.getAllByText("Logout");
    fireEvent.click(logoutButton[0]);
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("handles mobile drawer toggle when isMobile is true", () => {
    const handleDrawerToggle = vi.fn();
    renderNav({ ...defaultProps, handleDrawerToggle, isMobile: true });
    const ListItems = screen.getAllByTestId(/nav/i);
    fireEvent.click(ListItems[0]);

    expect(handleDrawerToggle).toHaveBeenCalled();
  });

  it("handles mobile drawer toggle when isMobile is false", () => {
    const handleDrawerToggle = vi.fn();
    renderNav({ ...defaultProps, handleDrawerToggle, isMobile: false });
    const ListItems = screen.getAllByTestId(/nav/i);
    fireEvent.click(ListItems[0]);

    expect(handleDrawerToggle).not.toHaveBeenCalled();
  });
});
