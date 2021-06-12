import { useState, useEffect } from "react";
import Input from "../components/todo/Input";
import TodoList from "../components/todo/TodoList";
import styles from "./TodoView.module.css";

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

  function toggleDone(todo) {
    todo.isDone = !todo.isDone;
    setTodos(todos.map((item) => (item.id === todo.id ? todo : item)));
  }

  function deleteTodo(todo) {
    setTodos(todos.filter((item) => item.id !== todo.id));
  }

  useEffect(() => {
    let storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos != null) {
      setTodos(storedTodos);
      let maxId = 0;
      storedTodos.forEach((todo) => {
        if (todo.id > maxId) maxId = todo.id;
      });
      maxId += 1;
      setId(maxId);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={styles.todoView}>
      <h1>Todo</h1>
      <Input addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleDone={toggleDone} />
    </div>
  );
}
