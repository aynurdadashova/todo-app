import { Todo } from "context";
import { useContext } from "react";
import { FilterState } from "data";
import style from "./filterbtn.module.scss";
import { Theme } from "context";

export const FilterBtn = () => {
  const { filterState, filterTodos } = useContext(Todo);
  const { isDark } = useContext(Theme);

  return (
    <div className={style.filterbtn}>
      <div className={style.filterbtn__groupBtn}>
        <button
          className={
            filterState === FilterState.ALL
              ? isDark
                ? style["filterbtn__dark__groupBtn__buttons--active"]
                : style["filterbtn__groupBtn__buttons--active"]
              : isDark
              ? style.filterbtn__dark__groupBtn__buttons
              : style.filterbtn__groupBtn__buttons
          }
          onClick={() => {
            filterTodos(FilterState.ALL);
          }}
        >
          All
        </button>
        <button
          className={
            filterState === FilterState.ACTIVE
              ? isDark
                ? style["filterbtn__dark__groupBtn__buttons--active"]
                : style["filterbtn__groupBtn__buttons--active"]
              : isDark
              ? style.filterbtn__dark__groupBtn__buttons
              : style.filterbtn__groupBtn__buttons
          }
          onClick={() => {
            filterTodos(FilterState.ACTIVE);
          }}
        >
          Active
        </button>
        <button
          className={
            filterState === FilterState.COMPLETED
              ? isDark
                ? style["filterbtn__dark__groupBtn__buttons--active"]
                : style["filterbtn__groupBtn__buttons--active"]
              : isDark
              ? style.filterbtn__dark__groupBtn__buttons
              : style.filterbtn__groupBtn__buttons
          }
          onClick={() => {
            filterTodos(FilterState.COMPLETED);
          }}
        >
          Completed
        </button>
      </div>
    </div>
  );
};
