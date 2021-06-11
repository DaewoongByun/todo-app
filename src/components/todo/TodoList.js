import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";
export default function TodoList({ todos, toggleDone, deleteTodo }) {
  const [listHeight, setListHeight] = useState(window.innerHeight - 200);

  useEffect(() => {
    window.onresize = function () {
      setListHeight(window.innerHeight - 200);
    };
  }, []);
  return (
    <div className={styles.todoList} style={{ height: `${listHeight}px` }}>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem todo={todo} toggleDone={toggleDone} deleteTodo={deleteTodo} key={todo.id} />
          );
        })}
      </ul>
    </div>
  );
}
