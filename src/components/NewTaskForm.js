import React from "react";


function NewTaskForm({categories, onTaskFormSubmit, handleNewTask, handleNewCategory, newTask, newCategory}) {

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit} >
      <label>
        Details
        <input type="text" name="text" value={newTask} onChange={handleNewTask}/>
      </label>
      <label>
        Category
        <select name="category" value={newCategory} onChange={handleNewCategory}>
          {/* render <option> elements for each category here */}
          {categories.slice(1).map((item, index)=> (
          <option key={index} value={item}>{item}</option>))
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
