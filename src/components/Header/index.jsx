import { Theme } from "context";
import React, { useContext } from "react";
import moonIcon from "components/../../public/assets/icon-moon.svg";
import sunIcon from "components/../../public/assets/icon-sun.svg";
export const Header = () => {
  const { isDark, changeTheme } = useContext(Theme);
  return (
    <header>
      <h1>T O D O</h1>
      <img
        src={isDark ? sunIcon : moonIcon}
        alt={`icon ${isDark ? "sun" : "moon"}`}
        onClick={changeTheme}
      />
    </header>
  );
};
