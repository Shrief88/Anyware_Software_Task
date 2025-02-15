import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Quiz from "../components/Quiz";
import { IQuiz } from "../interfaces";

describe("Quiz Component", () => {
  const mockQuiz: IQuiz = {
    _id: "1",
    course: "Mathematics",
    topic: "Algebra",
    due_to_day: "12-12-2022",
    due_to_hour: "12:00",
    title: "Quiz 1",
  };

  it("renders loading skeleton when isLoading is true", () => {
    render(<Quiz quiz={{} as IQuiz} isLoading={true} />);
    expect(screen.getAllByTestId("avatar-skeleton")).toBeDefined();
    expect(screen.getAllByTestId("course-skeleton")).toBeDefined();
    expect(screen.getAllByTestId("topic-skeleton")).toBeDefined();
  });

  it("renders quiz content when isLoading is false", () => {
    render(<Quiz quiz={mockQuiz} isLoading={false} />);
    expect(screen.getByText("Mathematics")).toBeInTheDocument();
    expect(screen.getByText("Algebra")).toBeInTheDocument();
    expect(screen.getByText("Quiz 1")).toBeInTheDocument();
  });
});
