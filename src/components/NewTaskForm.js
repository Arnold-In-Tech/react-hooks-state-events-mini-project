import React from "react";
// import { useState } from "react";


function NewTaskForm({categories, onTaskFormSubmit, handleNewTask, handleNewCategory, newTask, newCategory}) {

  // ===== The code below is exported to TaskList
  // const [newTask, setNewTask] = useState("");
  // const [newCategory, setNewCategory] = useState("");
  // const [taskData, setTaskData] = useState(task);

  // function handleNewTask(event){
  //   setNewTask(event.target.value);
  // }

  // function handleNewCategory(event){
  //   setNewCategory(event.target.value)
  // }

  // function onTaskFormSubmit(event){
  //   event.preventDefault();

  //   const formData = {
  //     text: newTask,
  //     category: newCategory};
    
  //   // update task list
  //   const dataArray = [...taskData, formData];
  //   setTaskData(dataArray); 
    
  //   // clear input fields
  //   setNewTask("");   
  //   setNewCategory("");

  // }


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
