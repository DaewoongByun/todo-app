import { useState } from "react";
import Input from "../components/todo/Input";
import TodoList from "../components/todo/TodoList";

export default function TodoView() {
  const [id, setId] = useState(0);
  const [todos, setTodos] = useState([]);
  function addTodo(todoText) {
    const todo = {
      id: id,
      text: todoText,
      isDone: false,
    };
    setTodos([...todos, todo]);
    setId(id + 1);
  }
  return (
    <div className="todoView">
      <h1>Todo</h1>
      <Input addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}
