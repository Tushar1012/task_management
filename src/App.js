import React, { useState } from 'react';
import './App.css';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function App() {
 const [tasks,setTasks] =useState([]);

 const addTask = (newTask)=>{
   console.log(newTask);
  // const newTask = {
  //   id: Date.now(),
  //   name: newTaskName,
  //   description: newTaskDescription,
  //   status: 'incomplete', 
  //   dueDate: newTaskDueDate,
  // };
  setTasks([...tasks,newTask]);
  console.log("addTask");
 };

 const deleteTask =(taskId) =>{
  const updatedTasks =tasks.filter((task)=>task.id !== taskId);
  setTasks(updatedTasks);
  console.log("deletetask");
 };
 const updateTask =(taskId,updatedTask) =>{
 const updatedTasks = tasks.map((task)=>
   task.id === taskId ? updatedTask :task);
   console.log("Task will update");
   setTasks(updatedTasks);
 };
  return (
    <div>
      <h3>Task Management App</h3>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask}
      onUpdate={updateTask}  setTasks={setTasks}/>
    </div>
  );
}

export default App;
