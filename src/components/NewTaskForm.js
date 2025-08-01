
import { CATEGORIES } from "../data";
import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(CATEGORIES[1]); // skip 'All'

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory(CATEGORIES[1]);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES.filter((cat) => cat !== "All").map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
