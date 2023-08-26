import React from "react";
import { removeToDo } from "../RTK/todoSlice";
import { useDispatch } from "react-redux/es/exports";
interface Props {
  id: number;
  task: string;
  checked: boolean;
  cm: ({
    id,
    task,
    checked,
  }: {
    id: number;
    task: string;
    checked: boolean;
  }) => void;
}
function SingleToDo({ id, task, checked, cm }: Props) {
  const dispatch = useDispatch();

  return (
    <div className="w-[400px] h-11 my-4 rounded-lg flex items-center pl-5 bg-green-400 text-slate-800 font-semibold text-xl justify-between">
      {checked ? <s>{task}</s> :<span>{ task }</span> }
      <div>
        <button
          className="ml-auto bg-red-700 text-white px-1 py-1 rounded-lg  mr-2"
          onClick={() => dispatch(removeToDo({ id, task, checked }))}
        >
          RM
        </button>
        <button
          className="ml-auto bg-red-700 text-white px-1 py-1 rounded-lg  mr-2"
          onClick={() => cm({ id, task, checked })}
        >
          CM
        </button>
      </div>
    </div>
  );
}

export default SingleToDo;
