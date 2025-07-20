import { useState, useEffect } from "react"
import { ACTION } from "../ConstantsType"
import type { action_type } from "../ConstantsType"
import type { Dispatch } from "react"
import type { task } from "../ConstantsType"

type FormProp = {
  dispatch: Dispatch<action_type>
  TaskRef?: task | null
}

export const Form = ({ dispatch, TaskRef }: FormProp) => {
  const [title, setTitle] = useState("")

  useEffect(() => {
    if (TaskRef) {
      setTitle(TaskRef.title)
    }
  }, [TaskRef])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!title.trim()) return

    if (TaskRef) {
      dispatch({
        type: ACTION.SAVE_EDIT_MODE,
        payload: {
          id: TaskRef.id,
          title,
          date: new Date().toLocaleDateString(),
          status: false,
        },
      })
    } else {
      dispatch({
        type: ACTION.ADD_TASK,
        payload: {
          id: Math.floor(Math.random() * 10000),
          title,
          date: new Date().toLocaleDateString(),
          status: false,
        },
      })
    }

    setTitle("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-base-200 flex flex-row w-96 p-1 rounded"
    >
      <input
        className="input"
        type="text"
        name="task"
        placeholder="Add Task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className={`btn ml-0.5 text-base-100 ${
          TaskRef ? "bg-neutral" : "bg-primary"
        }`}
        type="submit"
      >
        {TaskRef ? "Update Task" : <img alt="add" src="/add.svg"></img>}
      </button>
    </form>
  )
}
