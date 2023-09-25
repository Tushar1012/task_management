import React , { useState} from 'react';

const TaskForm = ({onAdd}) =>{
    // const [task,setTask] =useState('');
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [status, setStatus] = useState('incomplete'); // Default status

    const handleAddTask =()=>{
        if(taskName.trim() === '' || description.trim() === '' || dueDate === ''){
            alert('Please fill in all fields');
            return;
        }
        // new task
        const newTask ={
            id:Date.now(),
            name: taskName,
            description:description,
            status: status,
            dueDate: dueDate,

        };
        onAdd(newTask);
        setTaskName('');
        setDescription('');
        setDueDate('');
        setStatus('incomplete'); 
    };
    return (
        <div>
            <h2>Add Task</h2>
            <div className='form-group'>
            <input 
                type="text"
                placeholder='Enter Task Name'
                value={taskName}
                onChange={(e)=>setTaskName(e.target.value)}
                className="form-control"
            />
            </div>
            <div className='form-group'>
            <textarea 
        
                placeholder='Enter Task description'
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                className="form-control"
            />
            </div>
            <div className="form-group">
                    <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="form-control">
                    <option value="incomplete">Incomplete</option>
                    <option value="completed">Completed</option>
                    </select>
                </div>
            <div className='form-group'>
            <input 
        
               type="date"
                value={dueDate}
                onChange={(e)=>setDueDate(e.target.value)}
                className="form-control"
            />
            </div>

            <button className="btn btn-info" onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default TaskForm; 