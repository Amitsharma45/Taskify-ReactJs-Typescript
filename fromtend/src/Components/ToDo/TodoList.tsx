import React from "react";
import { Todo } from "../types";
import SingleToDo from "./SingleToDo";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/exports";
import { toogleChecked } from "../RTK/todoSlice";

function TodoList() {
  const { todos } = useSelector((state: any) => state.todoSlice);
  const dispatch = useDispatch();
  function CM({ id, task, checked }: Todo) {
    // const t = 
    console.log(todos);
    // console.log(t);
    dispatch(toogleChecked({ id, task , checked }));
  }
  return (
    <div>
      {todos?.map((item: Todo) => (
        <SingleToDo
          id={item.id}
          task={item.task}
          checked={item.checked}
          cm={CM}
        />
      ))}
    </div>
  );
}

export default TodoList;
