import React, {useState} from 'react';
const TaskList =({tasks,onDelete,onUpdate,setTasks}) =>{
    const [editingTaskId, setEditingTaskId] =useState(null);
    const [editedTask,setEditedTask]= useState('');
    const handleEditClick =(taskId,task,) =>{
        setEditingTaskId(taskId);
        setEditedTask(task);
    };

    const handleSaveClick =(taskId) =>{
        const updatedTasks =tasks.map((task) =>
            task.id === taskId ? {...task ,... editedTask}:task 
        );
        setTasks(updatedTasks);
        console.log(updatedTasks)
        // onUpdate(taskId,editedTask);
        setEditingTaskId(null);
    };
    console.log(tasks);
    return (
        <div>
          <h2>Task List</h2>
          <ul className="list-group">
            {tasks.map((task) => (
              <li key={task.id} className="list-group-item">
                {editingTaskId === task.id ? (
                  <>
                    <div className="form-group">
                      <label>Task Name:</label>
                      <input
                        type="text"
                        value={editedTask.name || ''}
                        onChange={(e) => setEditedTask({ ...editedTask, name: e.target.value })}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Description:</label>
                      <input
                        type="text"
                        value={editedTask.description || ''}
                        onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Status:</label>
                      <input
                        type="text"
                        value={editedTask.status || ''}
                        onChange={(e) => setEditedTask({ ...editedTask, status: e.target.value })}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Due Date:</label>
                      <input
                        type="date"
                        value={editedTask.dueDate || ''}
                        onChange={(e) => setEditedTask({ ...editedTask, dueDate: e.target.value })}
                        className="form-control"
                      />
                    </div>
                    <button onClick={() => handleSaveClick(task.id)} className="btn btn-success">Save</button>
                  </>
                ) : (
                  <>
                    <h5 className="mb-1">Task Name: {task.name}</h5>
                    <p className="mb-1">Description: {task.description}</p>
                    <p className="mb-1">Status: {task.status}</p>
                    <p className="mb-1">Due Date: {task.dueDate}</p>
                    <button className="btn btn-danger btn-sm mr-2" onClick={() => onDelete(task.id)}>Delete</button>
                    <button className="btn btn-primary btn-sm" onClick={() => handleEditClick(task.id, task)}>Edit</button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      );
    };

export default TaskList;
