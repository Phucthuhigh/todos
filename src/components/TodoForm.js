import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem";

const TodoForm = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: "",
    },
  ]);

  const changeEvent = (e) => {
    const index = e.target.dataset.index;
    let newTodos = [...todos];
    newTodos[index].title = e.target.value;
    setTodos(newTodos);
  };

  const addTodo = () => {
    setTodos([...todos, { id: uuidv4(), title: "", completed: false }]);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleDelete = (e) => {
    const todoInput = e.target.parentNode.parentNode.querySelectorAll(
      ".todo-item .todo-input"
    );

    let newTodos = [...todos];
    newTodos[todoInput.length - 2].title =
      todoInput[todoInput.length - 2].value + " ";
    setTodos(newTodos);
    todoInput[todoInput.length - 2].disabled = false;
    todoInput[todoInput.length - 2].focus();
  };

  const onKeyDownTodos = (e) => {
    if (e.key === "Enter") {
      if (e.target.value !== "") {
        addTodo();
      }
    }
    if (e.key === "Backspace") {
      if (e.target.value === "") {
        if (todos.length > 1) {
          handleDelete(e);
          deleteTodo(e.target.dataset.id);
        }
      }
    }
  };
  return (
    <div className="container">
      <div className="Todo__Form">
        <div className="header">
          <h2>Follow Ups</h2>
        </div>
        <div className="record">
          <span>Task</span>
          <span>Assigned to</span>
          <span>Like</span>
        </div>
        <form className="todo-container">
          {todos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              dataIndex={index}
              dataId={todo.id}
              onChangeTodos={changeEvent}
              onKeyDownTodos={onKeyDownTodos}
              completed={todo.completed}
              title={todo.title}
            />
          ))}
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
