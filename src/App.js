import React, { useState } from "react";
import "./styles.css";

import TodoList from "./TodoList";

export default function App() {
  const [todoList, setTodoList] = useState([
    { text: "Ace the interview" },
    { text: "Make coffee" },
  ]);
  const [newTodo, setNewTodo] = useState({ text: "" });

  const completeTodo = (todo) => {
    const filter = todoList.filter((todoElem) => todoElem.text !== todo.text);
    setTodoList(filter);
  };

  const addTodo = (newTodo) => {
    if (newTodo.text === "") return;

    setTodoList([...todoList, newTodo]);
    setNewTodo({ text: "" });
  };

  return (
    <div className="app-wrapper">
      <TodoList todoList={todoList} completeTodo={completeTodo} />
      <div>
        <input
          type="text"
          onChange={(event) => setNewTodo({ text: event.target.value })}
          value={newTodo.text}
        />
        <button onClick={() => addTodo(newTodo)}>OK</button>
      </div>
    </div>
  );
}
