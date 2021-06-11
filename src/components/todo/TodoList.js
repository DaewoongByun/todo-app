import TodoItem from "./TodoItem";
export default function TodoList({ todos, toggleDone, deleteTodo }) {
  return (
    <div className="todoList">
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
