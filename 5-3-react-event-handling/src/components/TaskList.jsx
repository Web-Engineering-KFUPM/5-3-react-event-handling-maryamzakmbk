import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete }) {
  return (
    <ul className="list">
      {/* Task 2 – Display Placeholder if No Tasks Yet */}
        {tasks.length === 0 && (
            <p className="placeholder">No tasks yet. Add one above!</p>
        )}
      {/* Task 2 & 3 – Map tasks to TaskItem */}
        {tasks.map((task) => (
            <TaskItem
                key={task.id}   // unique key for each task
                id={task.id}    // pass id prop
                text={task.text} // pass text prop
                onDelete={onDelete} // pass delete handler
            />
        ))}
    </ul>
  );
}
