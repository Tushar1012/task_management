import React, { useState } from 'react';
import './App.css';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Navbar from './Navbar';

function App() {
 const [tasks,setTasks] =useState([]);
 const [filterStatus, setFilterStatus] = useState('all'); 


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
    <div className='container mt-3'>
    <Navbar />
      <TaskForm onAdd={addTask} />
      <div className="form-group">
        <label>Filter by Status:</label>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="form-control"
        >
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <TaskList tasks={tasks} onDelete={deleteTask}
      onUpdate={updateTask}  setTasks={setTasks}
      filterStatus={filterStatus}
      />
    </div>
  );
}

export default App;
