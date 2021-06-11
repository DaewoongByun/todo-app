import { useState } from "react";
import styles from "./Input.module.css";

export default function Input({ addTodo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function createTodo(e) {
    if (e.key === "Enter") {
      if (text.trim()) {
        addTodo(text);
        setText("");
      }
    }
  }
  function handleButtonClick() {
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  }
  return (
    <div className={styles.input}>
      <input
        type="text"
        onKeyUp={createTodo}
        maxLength="20"
        value={text}
        onChange={onChange}
        autoFocus
      />
      <button onClick={handleButtonClick}>추가</button>
    </div>
  );
}
