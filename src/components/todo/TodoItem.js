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
    <li className={todo.isDone ? styles.done : styles.unDone}>
      <div className={styles.textField}>
        <span className={styles.title}>{todo.text}</span>
        <span className={styles.date}>{`${todo.year}/${todo.month}/${todo.day}까지`}</span>
      </div>
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
