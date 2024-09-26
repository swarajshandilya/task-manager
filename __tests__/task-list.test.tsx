import { render, screen, fireEvent } from "@testing-library/react";
import TaskList from "../app/task-list/page";
import { Task } from "../app/types/task";

const mockTasks: Task[] = [
  { id: 1, title: "Test Task 1", completed: false },
  { id: 2, title: "Test Task 2", completed: false },
];

describe("TaskList Component", () => {
  it("renders tasks correctly", () => {
    render(
      <TaskList
        tasks={mockTasks}
        onToggleComplete={() => {}}
        onDelete={() => {}}
      />
    );

    expect(screen.getByText("Test Task 1")).toBeInTheDocument();
    expect(screen.getByText("Test Task 2")).toBeInTheDocument();
  });

  it("calls onToggleComplete when task is clicked", () => {
    const mockToggleComplete = jest.fn();
    render(
      <TaskList
        tasks={mockTasks}
        onToggleComplete={mockToggleComplete}
        onDelete={() => {}}
      />
    );

    fireEvent.click(screen.getByText("Test Task 1"));
    expect(mockToggleComplete).toHaveBeenCalledWith(1);
  });

  it("calls onDelete when delete button is clicked", () => {
    const mockDelete = jest.fn();
    render(
      <TaskList
        tasks={mockTasks}
        onToggleComplete={() => {}}
        onDelete={mockDelete}
      />
    );

    fireEvent.click(screen.getAllByText("Delete")[0]);
    expect(mockDelete).toHaveBeenCalledWith(1);
  });
});
