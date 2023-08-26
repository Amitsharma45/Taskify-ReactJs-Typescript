import { createSlice } from "@reduxjs/toolkit";
interface Todo {
  id: number;
  task: string;
  checked: boolean;
}

interface InitialStateType {
  todos: Todo[];
  name: string;
}

const initialState: InitialStateType = {
  todos: [],
  name: "Amit",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeToDo: (state, action) => {
      state.todos = state.todos.filter((item: Todo) => {
        return item.id !== action.payload.id;
      });
    },
    toogleChecked: (state, action) => {
      state.todos.filter((item: Todo): Todo => {
        if (item.id === action.payload.id) {
          item.checked = !item.checked;
        }
        return item;
      });
    },
  },
});

export const { addTodo, removeToDo, toogleChecked } = todoSlice.actions;
export default todoSlice.reducer;
