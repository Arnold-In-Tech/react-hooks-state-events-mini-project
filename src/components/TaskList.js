import React from "react";
import Task from "./Task";
import NewTaskForm from "./NewTaskForm";
import CategoryFilter from "./CategoryFilter";
import { useState } from "react";
import { CATEGORIES } from "../data";



function TaskList({tasks}) {

  // ============== NewTaskForm Props =================

  const [newTask, setNewTask] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [tasksData, setTasksData] = useState(tasks);

  function handleNewTask(event){
    setNewTask(event.target.value);
  }

  function handleNewCategory(event){
    setNewCategory(event.target.value)
  }

  function onTaskFormSubmit(event){
    event.preventDefault();

    const formData = {
      text: newTask,
      category: newCategory};
    
    // update task list
    const dataArray = [...tasksData, formData];
    setTasksData(dataArray); 
    
    // clear input fields
    setNewTask("");   
    setNewCategory("");

  }

  // =================================================


  // =================== CategoryFilter Props =============
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleOnClick(event){
    event.target.className = "selected";
    setSelectedCategory(event.target.value)    
  }

  const tasksToDisplay = tasksData.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
  // =================================================



  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <CategoryFilter categories={CATEGORIES} handleOnClick={handleOnClick}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} handleNewTask={handleNewTask} handleNewCategory={handleNewCategory} newTask={newTask} newCategory={newCategory}/>
      <ul>
        {tasksToDisplay.map((item, index) => (
          <li key={index}>
            <Task text={item.text} category={item.category}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
