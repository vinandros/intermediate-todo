import React from "react";

export default function TodoList({ todoList, completeTodo }) {
  return (
    <ul className="todo-list">
      {todoList.map((todo) => (
        <Todo key={todo.text} todo={todo} completeTodo={completeTodo} />
      ))}
    </ul>
  );
}

function Todo({ todo, completeTodo }) {
  return (
    <li
      onClick={() => {
        completeTodo(todo);
      }}
    >
      {todo.text}
    </li>
  );
}
