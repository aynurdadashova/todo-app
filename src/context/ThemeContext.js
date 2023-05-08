import { createContext, useState } from "react";
export const Theme = createContext({});
export const ThemeContext = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const changeTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <Theme.Provider value={{ isDark, changeTheme }}>{children}</Theme.Provider>
  );
};
