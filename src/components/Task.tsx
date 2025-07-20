import type { task } from "../ConstantsType"
import { type action_type, ACTION } from "../ConstantsType"
import { type Dispatch } from "react"

type TaskProp = {
  tasks: task
  dispatch: Dispatch<action_type>
}

export const Task = ({ tasks, dispatch }: TaskProp) => {
  return (
    <div
      className={`flex justify-between items-center  w-96 p-1 rounded mt-0.5 ${
        tasks.status ? "bg-accent" : "bg-base-100"
      }`}
    >
      <div className="flex items-center space-x-2">
        <input
          placeholder="Done"
          type="checkbox"
          className="checkbox bg-base-100"
          disabled={tasks.status}
          onClick={() => {
            dispatch({ type: ACTION.COMPLETE_TASK, payload: tasks.id })
          }}
        />
        <span className="text-sm font-medium">{tasks.title}</span>
      </div>
      <div>
        <button
          className="btn p-1 bg-info disabled:bg-accent "
          disabled={tasks.status}
          onClick={() => {
            dispatch({ type: ACTION.START_EDIT_MODE, payload: tasks.id })
          }}
        >
          <img src="/edit.svg" alt="edit" />
        </button>
        <button
          className="btn p-1 bg-secondary"
          title="Delete Task"
          onClick={() =>
            dispatch({ type: ACTION.DELETE_TASK, payload: tasks.id })
          }
        >
          <img src="/delete.svg" alt="delete" />
        </button>
      </div>
    </div>
  )
}
