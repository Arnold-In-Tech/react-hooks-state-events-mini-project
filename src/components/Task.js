import React from "react";

function removeTask(event){
  event.target.closest('li').remove();
}

function Task({text, category}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={removeTask}>X</button>
    </div>
  );
}

export default Task;
