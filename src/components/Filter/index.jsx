import { Todo } from "context";
import { useContext } from "react";
import style from "./filter.module.scss";
import { Theme } from "context";
import { FilterBtn } from "components";

export const Filter = () => {
  const { todos, clearCompleted } = useContext(Todo);
  const { isDark } = useContext(Theme);
  return (
    <div className={`${isDark ? style.filter__dark : style.filter}`}>
      <h3
        className={`${isDark ? style.filter__dark__text : style.filter__text}`}
      >
        {todos.reduce((acc, todo) => acc + !todo.done, 0)} items left
      </h3>
      <div className="fordesktop">
        <FilterBtn />
      </div>
      <button
        className={`${
          isDark ? style.filter__dark__clearBtn : style.filter__clearBtn
        }`}
        onClick={clearCompleted}
      >
        Clear Completed
      </button>
    </div>
  );
};
