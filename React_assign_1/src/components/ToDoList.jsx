



import ToDoItem from './ToDoItem'


function ToDoList({ tasks, deleteTask, toggleComplete, editTask }) {

    return (
        <div className="task-list">

            {tasks.length === 0 ? (

                <div className="empty-state">

                    <h3>No Task Added yet</h3>

                    <p>Add your First Task</p>

                </div>

            ) : (

                tasks.map((task) => (

                    <ToDoItem
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        toggleComplete={toggleComplete}
                        editTask={editTask}

                    />
                ))
            )}

        </div>
    )
}


export default ToDoList;