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
      <span className={styles.textField}>{todo.text}</span>
      <span className={styles.button}>
        {todo.isDone ? (
          <CheckSquare onClick={handleDoneClick} size={20} />
        ) : (
          <Square onClick={handleDoneClick} size={20} />
        )}
      </span>
      <span className={styles.button}>
        <X onClick={handleDelete} color="red" size={40} />
      </span>
    </li>
  );
}
