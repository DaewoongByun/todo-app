import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Input.module.css";

export default function Input({ addTodo }) {
  const [text, setText] = useState("");
  const { year, month, day } = useParams();

  const inputRef = useRef(null);

  function onChange(e) {
    setText(e.target.value);
  }
  function createTodo(e) {
    if (e.key === "Enter") {
      if (text.trim()) {
        addTodo(text, year, month, day);
        setText("");
      }
    }
  }
  function handleButtonClick() {
    if (text.trim()) {
      addTodo(text, year, month, day);
      setText("");
    }
    inputRef.current.focus();
  }

  return (
    <div className={styles.input}>
      <input
        ref={inputRef}
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
