import React, { useState } from "react";
import { Todo } from "./Components/types";
import TodoList from "./Components/ToDo/TodoList";
import { addTodo } from "./Components/RTK/todoSlice";
import { useDispatch } from "react-redux"
function App() {
  const [tasks, setTasks] = React.useState<string>('');
  const dispatch=useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newtodo: Todo = {
      id: Math.floor(Math.random() * 1000),
      task: tasks,
      checked:false
    };
    dispatch(addTodo(newtodo));

    setTasks("");
  };
  return (
    <div className="h-screen bg-blue-500 flex flex-col  items-center">
      <div className="pt-10  text-red-700  text-4xl font-semibold">TasKify</div>
      <form className="flex flex-col items-center" onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder="Add Task"
          value={tasks}
          onChange={(e) => setTasks(e.target.value)}
          className="w-[500px] h-10 bg-gray-200 rounded-lg mt-10 mx-auto px-3 py-2 text-xl font-semibold "
        />
        <button
          type="submit"
          className="bg-red-700 text-white mt-5 px-5 py-2 rounded-lg font-semibold"
        >
          Go
        </button>
      </form>
      <TodoList  />
    </div>
  );
}

export default App;
