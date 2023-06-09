import React, { useContext } from "react";
import { map } from "lodash";
import { TodoItem } from "components/TodoItem";
import { FilterState } from "data";
import { Todo } from "context";
export const TodoList = () => {
  const { todos, filterState, toggle, remove } = useContext(Todo);
  return (
    <>
      {map(
        todos.filter((todo) => {
          if (filterState === FilterState.ACTIVE) {
            return todo.done === false;
          }
          if (filterState === FilterState.COMPLETED) {
            return todo.done === true;
          }
          return true;
        }),
        ({ id, title, done }) => (
          <TodoItem
            key={id}
            title={title}
            done={done}
            toggle={() => toggle(id)}
            remove={() => remove(id)}
          />
        )
      )}
    </>
  );
};
