import React, {useState} from 'react'

const TodoList = () => {
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handleNewTodoSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, newTodo]);
    };

  return (
    <div>
        <form onSubmit={(event) => {
            handleNewTodoSubmit(event);
        }}>
            <input onChange={(event) => {
                setNewTodo(event.target.value);
            }}type="text" />
            <div>
                <button>Add</button>
            </div>
        </form>
    </div>
  )
}

export default TodoList