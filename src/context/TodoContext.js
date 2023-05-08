import { createContext, useState } from "react";
import { FilterState, initialTodos } from "../data";
import { keys, find, cloneDeep, filter, uniqueId } from "lodash";
export const Todo = createContext({});
export const TodoContext = ({ children }) => {
  const [todos, setTodos] = useState(initialTodos);
  const [filterState, setFilterState] = useState(FilterState.ALL);

  const toggle = (id) => {
    setTodos((prev) => {
      const clone = cloneDeep(prev);
      const found = find(clone, (t) => t.id === id);
      if (found) found.done = !found.done;
      return clone;
    });
  };
  const remove = (id) => {
    setTodos((prev) => {
      const clone = cloneDeep(prev);
      const filtered = filter(clone, (t) => t.id !== id);
      return filtered;
    });
  };
  const add = (title, done) => {
    setTodos((prev) => {
      const newTodo = {
        id: uniqueId(),
        title: title,
        done: done,
      };
      return [...prev, newTodo];
    });
  };
  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.done));
  };
  const filterTodos = (filterMethod) => {
    if (keys(FilterState).includes(filterMethod)) {
      setFilterState(filterMethod);
    }
  };

  return (
    <Todo.Provider
      value={{
        todos,
        filterState,
        toggle,
        remove,
        add,
        clearCompleted,
        filterTodos,
      }}
    >
      {children}
    </Todo.Provider>
  );
};
