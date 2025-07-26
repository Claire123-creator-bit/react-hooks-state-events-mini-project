
import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDeleteTask(text) {
    setTasks(tasks.filter((task) => task.text !== text));
  }

  function handleSelectCategory(category) {
    setSelectedCategory(category);
  }

  const tasksToDisplay =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <NewTaskForm onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={tasksToDisplay} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
