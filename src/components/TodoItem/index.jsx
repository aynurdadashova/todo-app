import React, { useContext } from "react";
import { Checkbox } from "components/Checkbox";
import style from "./todoItem.module.scss";
import pt from "prop-types";
import { Theme } from "context";
import crossIcon from "components/../../public/assets/icon-cross.svg";
export const TodoItem = ({ title, done = false, toggle, remove }) => {
  const { isDark } = useContext(Theme);
  return (
    <div
      className={`${isDark ? style.item__dark : style.item}`}
      data-checked={done}
    >
      <Checkbox checked={done} onClick={toggle} />
      <h2 className={`${isDark ? style.item__dark__title : style.item__title}`}>
        {title}
      </h2>
      <button className={style.item__delete} onClick={remove}>
        <img src={crossIcon} alt="icon cross" />
      </button>
    </div>
  );
};

TodoItem.propTypes = {
  title: pt.string.isRequired,
  done: pt.bool,
  toggle: pt.func.isRequired,
  remove: pt.func.isRequired,
};
