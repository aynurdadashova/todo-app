import { uniqueId } from "lodash";

export const initialTodos = [
  {
    id: uniqueId(),
    title: "Jog around the park 3x",
    done: true,
  },
  {
    id: uniqueId(),
    title: "10 minutes meditation",
    done: false,
  },
  {
    id: uniqueId(),
    title: "Read for 1 hour",
    done: false,
  },
];
export const FilterState = {
  ALL: "ALL",
  COMPLETED: "COMPLETED",
  ACTIVE: "ACTIVE",
};
