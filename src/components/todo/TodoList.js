import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";
export default function TodoList({ todos, toggleDone, deleteTodo }) {
  const [listHeight, setListHeight] = useState(window.innerHeight - 200);
  const { year, month, day } = useParams();
  const [showTodos, setShowTodos] = useState([]);

  useEffect(() => {
    window.onresize = function () {
      setListHeight(window.innerHeight - 200);
    };
  }, []);
  useEffect(() => {
    const newTodos = todos.filter(
      (todo) => todo.year >= year && todo.month >= month && todo.day >= day
    );
    newTodos.sort((todo1, todo2) => {
      if (todo1.year === todo2.year) {
        if (todo1.month === todo2.month) {
          if (todo1.day === todo2.day) {
            return 0;
          } else {
            return todo1.day - todo2.day;
          }
        } else {
          return todo1.month - todo2.month;
        }
      } else {
        return todo1.year - todo2.year;
      }
    });
    setShowTodos(newTodos);
  }, [todos, year, month, day]);
  return (
    <div className={styles.todoList} style={{ height: `${listHeight}px` }}>
      <ul>
        {showTodos.map((todo) => {
          return (
            <TodoItem todo={todo} toggleDone={toggleDone} deleteTodo={deleteTodo} key={todo.id} />
          );
        })}
      </ul>
    </div>
  );
}
