import { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
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

  return (
    <input
      ref={inputRef}
      type="text"
      onKeyUp={createTodo}
      maxLength="20"
      value={text}
      onChange={onChange}
      placeholder="할 일을 입력하고 Enter키를 누르세요"
      autoFocus
    />
  );
}
