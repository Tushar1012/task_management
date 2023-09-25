import React, { useState ,useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Navbar from './Navbar';
import Notification, { displayNotification } from './Notification';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
 const [tasks,setTasks] =useState([]);
 const [filterStatus, setFilterStatus] = useState('all'); 


 const addTask = (newTask)=>{
 
  // const newTask = {
  //   id: Date.now(),
  //   name: newTaskName,
  //   description: newTaskDescription,
  //   status: 'incomplete', 
  //   dueDate: newTaskDueDate,
  // };
  setTasks([...tasks,newTask]);
 };

 const deleteTask =(taskId) =>{
  const updatedTasks =tasks.filter((task)=>task.id !== taskId);
  setTasks(updatedTasks);
 
 };
 const updateTask =(taskId,updatedTask) =>{
 const updatedTasks = tasks.map((task)=>
   task.id === taskId ? updatedTask :task);
   setTasks(updatedTasks);
 };


// checking due dates and trigger notifications
  const checkDueDates = () => {
    const now = Date.now();
    tasks.forEach((task) => {
      if (task.dueDate && new Date(task.dueDate).getTime() <= now) {
        // passing duedate
        displayNotification(`Task "${task.name}" is overdue!`, {
          type: 'error',
        });
      }
    });
  };

  // this is checkig due date
  useEffect(() => {
    const intervalId = setInterval(checkDueDates, 60000); // 60000 ms = 1 minute
    return () => clearInterval(intervalId);
  }, [tasks]);
  return (
    <Router>
      <div className='container mt-3'>
        <Navbar />
        <ToastContainer autoClose={5000} />
        <Routes>
          <Route path="/" element={<TaskForm onAdd={addTask} />} />
          <Route
            path="/tasklist"
            element={
              <>
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
                <TaskList
                  tasks={tasks}
                  onDelete={deleteTask}
                  onUpdate={updateTask}
                  setTasks={setTasks}
                  filterStatus={filterStatus}
                />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;