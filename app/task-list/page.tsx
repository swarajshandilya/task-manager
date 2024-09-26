"use client";
import React from "react";
import { Task } from "../types/task";

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleComplete,
  onDelete,
}) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center justify-between">
          <span
            className={`cursor-pointer ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
            onClick={() => onToggleComplete(task.id)}
          >
            {task.title}
          </span>
          <button
            className="bg-red-500 text-white px-2 rounded"
            onClick={() => onDelete(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
