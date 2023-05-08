import React, { useContext } from "react";
import pt from "prop-types";
import style from "./checkbox.module.scss";
import { Theme } from "context";
export const Checkbox = ({ checked, onClick }) => {
  const { isDark } = useContext(Theme);
  return (
    <div className={style.checkbox}>
      <div
        className={style.checkbox__check}
        data-theme={isDark ? "dark" : "light"}
        data-checked={checked}
        onClick={onClick}
      ></div>
    </div>
  );
};

Checkbox.propTypes = {
  checked: pt.bool.isRequired,
  onClick: pt.func.isRequired,
};
