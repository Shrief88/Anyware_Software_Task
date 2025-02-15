import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Announcement from "../components/Announcement";
import { IAnnouncement } from "../interfaces";

describe("Announcement Component", () => {
  const mockAnnouncement: IAnnouncement = {
    _id: "1",
    employee: {
      firstName: "John",
      lastName: "Doe",
      image: "https://example.com/image.jpg",
      position: "Instructor",
      gender: "Male",
      _id: "1",
      updatedAt: new Date(),
      createdAt: new Date(),
    },
    content: "Test announcement content",
    about: "Test Subject",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  it("renders loading skeleton when isLoading is true", () => {
    render(
      <Announcement announcement={{} as IAnnouncement} isLoading={true} />
    );
    expect(screen.getAllByTestId("avatar-skeleton")).toBeDefined();
    expect(screen.getAllByTestId("name-skeleton")).toBeDefined();
    expect(screen.getAllByTestId("subtitle-skeleton")).toBeDefined();
  });

  it("renders announcement content when isLoading is false", () => {
    render(<Announcement announcement={mockAnnouncement} isLoading={false} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Test announcement content")).toBeInTheDocument();
    expect(screen.getByText("Test Subject")).toBeInTheDocument();
  });
});
