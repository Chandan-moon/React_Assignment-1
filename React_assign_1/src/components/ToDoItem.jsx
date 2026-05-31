


import { useState } from 'react'



function ToDoItem({ task, deleteTask, toggleComplete, editTask }) {

    const [isEditing, setIsEditing] = useState(false)

    const [editedText, setEditedText] = useState(task.text)


    const handleSave = () => {

        if (editedText.trim() === '') return

        editTask(task.id, editedText)

        setIsEditing(false)

    }


    return (

        <div className={`task-item ${task.completed ? 'completed' : ''}`}>

            <div className="task-left">

                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                />

                {isEditing ? (

                    <input
                        className="edit-input"
                        type="text"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}

                    />

                ) : (

                    <span>{task.text}</span>

                )}

            </div>

            <div className="task-actions">

                {isEditing ? (

                    <button className="save-btn" onClick={handleSave}>Save</button>

                ) : (
                    <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
                )}

                <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>

            </div>

        </div>
    )
}



export default ToDoItem;