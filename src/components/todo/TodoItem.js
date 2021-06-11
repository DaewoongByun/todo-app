import { Square, CheckSquare, X } from "react-bootstrap-icons";
import styles from "./TodoItem.module.css";

export default function Todo({ todo, toggleDone, deleteTodo }) {
  function handleDoneClick() {
    toggleDone(todo);
  }
  function handleDelete() {
    if (window.confirm("삭제하시겠습니까?")) deleteTodo(todo);
  }
  return (
    <li className={todo.isDone ? styles.done : ""}>
      <span>{todo.text}</span>
      {todo.isDone ? (
        <CheckSquare onClick={handleDoneClick} />
      ) : (
        <Square onClick={handleDoneClick} />
      )}
      <X onClick={handleDelete} />
    </li>
  );
}
