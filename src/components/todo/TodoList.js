import TodoItem from "./TodoItem";
export default function TodoList({ todos }) {
  return (
    <div className="todoList">
      <ul>
        {todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} />;
        })}
      </ul>
    </div>
  );
}
