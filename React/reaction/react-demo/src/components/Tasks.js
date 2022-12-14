import React from "react";
import Task from './Task'
export default function Tasks({tasks}) {
  return (
      
    <div>
      {tasks.map((task) => {
        return (
          <Task key={task.id} task={task} />
        );
      })}
    </div>
  );
}
