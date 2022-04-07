import React, {useState} from 'react'
import './TodoList.css'

const TodoList = () => {
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handleNewTodoSubmit = (event) => {
        event.preventDefault();
        if(newTodo.length == 0) {
            return;
        }
        const todoItem = {
            text: newTodo,
            complete: false
        };
        setTodos([...todos, todoItem]);
        setNewTodo("");
    };

    const handleTodoDelete = (delIdx) => {
        const filteredTodos = todos.filter((todo,i) => {
            return i != delIdx;
        });
        setTodos(filteredTodos);
    }

    const handleToggleComplete = (idx) => {
        const updatedTodos = todos.map((todo,i) => {
            if(idx == i) {
                todo.complete = !todo.complete;
                // const updatedTodo = {...todo, complete: !todo.complete};
                // return updatedTodo;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

  return (
    <div class="display-card">
        <div class="form-box">
        <h1>Todo List app</h1>
        <form onSubmit={(event) => {
            handleNewTodoSubmit(event);
            }}>
                <input onChange={(event) => {
                    setNewTodo(event.target.value);
                }}type="text" value={newTodo} className="form-control"/>
                <div>
                    <button>Add Todo</button>
                </div>
            </form>
        </div>
        <div class="items">
            {todos.map((todo, i) => {
                const todoClasses = ["bold, italic"];
                
                if(todo.complete) {
                    todoClasses.push("line")
                }
                return (
                    <div key={i}>
                        <input onChange={(event) => {
                            handleToggleComplete(i);
                        }} checked={todo.complete} type="checkbox" />
                        <span className={todoClasses.join(" ")}>{todo.text}</span>
                        <button onClick={(event) =>{
                            handleTodoDelete(i);
                        }}>Delete</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default TodoList