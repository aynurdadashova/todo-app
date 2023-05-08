import { Theme } from "context";
import { useContext } from "react";
import { Filter, TodoCreate, TodoList, Header, FilterBtn } from "components";
function App() {
  const { isDark } = useContext(Theme);
  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <div className="container">
        <Header />
        <TodoCreate />
        <TodoList />
        <Filter />
        <div className={`${isDark ? "formobile-dark" : "formobile"}`}>
          <FilterBtn />
        </div>
      </div>
    </div>
  );
}

export default App;
