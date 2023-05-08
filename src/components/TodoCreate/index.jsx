import React, { useContext, useState } from "react";
import { Todo } from "context";
import { Theme } from "context";
import { Checkbox } from "components/Checkbox";
import style from "./todoCreate.module.scss";
export const TodoCreate = () => {
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState("");
  const { add } = useContext(Todo);
  const { isDark } = useContext(Theme);
  return (
    <div className={`${isDark ? style.create__dark : style.create}`}>
      <Checkbox
        checked={done}
        onClick={() => {
          setDone((prev) => !prev);
        }}
      />
      <input
        type="text"
        className={`${
          isDark ? style.create__dark__input : style.create__input
        }`}
        value={title}
        placeholder="Create a new todo…"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            add(title, done);
            setDone(false);
            setTitle("");
          }
        }}
      />
    </div>
  );
};
