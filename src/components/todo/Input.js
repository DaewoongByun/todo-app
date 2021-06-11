export default function Input({ addTodo }) {
  function createTodo(e) {
    if (e.key === "Enter") {
      if (e.target.value.trim()) {
        addTodo(e.target.value);
        e.target.value = "";
      }
    }
  }
  return (
    <div className="input">
      <input type="text" onKeyUp={createTodo} />
    </div>
  );
}
