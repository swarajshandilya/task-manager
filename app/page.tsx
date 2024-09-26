"use client";
import React, { useState } from "react";
import { Task } from "../app/types/task";
import TaskList from "../app/task-list/page";

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskTitle, setTaskTitle] = useState("");

  const addTask = () => {
    if (!taskTitle) return;

    const newTask: Task = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskTitle("");
  };

  const toggleComplete = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold">Task Management App</h1>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="New Task"
        className="border p-2 w-full"
      />
      <button
        onClick={addTask}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
      >
        Add Task
      </button>

      <TaskList
        tasks={tasks}
        onToggleComplete={toggleComplete}
        onDelete={deleteTask}
      />
    </div>
  );
};

export default Home;
