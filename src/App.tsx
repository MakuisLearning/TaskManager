import { Form } from "./components/Form"
import { useEffect, useReducer } from "react"
import { Task } from "./components/Task"

import { ACTION } from "./ConstantsType"
import type { action_type, task } from "./ConstantsType"

type initialState_type = {
  tasks: task[]
  selectedtask: number | null
}

const getInitialState = (): initialState_type => {
  const localData = localStorage.getItem("tasks_state")
  return localData ? JSON.parse(localData) : { tasks: [], selectedtask: null }
}

const reducer = (
  state: initialState_type,
  action: action_type
): initialState_type => {
  switch (action.type) {
    case ACTION.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      }

    case ACTION.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((state) => state.id !== action.payload),
      }

    case ACTION.COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((tasks) =>
          tasks.id === action.payload
            ? { ...tasks, status: !tasks.status }
            : tasks
        ),
      }

    case ACTION.START_EDIT_MODE:
      return {
        ...state,
        selectedtask: action.payload,
      }

    case ACTION.CANCEL_EDIT_MODE:
      return {
        ...state,
        selectedtask: null,
      }

    case ACTION.SAVE_EDIT_MODE:
      return {
        ...state,
        selectedtask: null,
        tasks: state.tasks.map((state) =>
          state.id === action.payload.id
            ? { ...state, title: action.payload.title }
            : state
        ),
      }

    default:
      return state
  }
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, undefined, getInitialState)

  useEffect(() => {
    localStorage.setItem("tasks_state", JSON.stringify(state))
  }, [state])

  return (
    <div className="bg-base-300 h-dvh flex flex-col justify-start items-center p-2">
      <Form
        TaskRef={state.tasks.find((t) => t.id === state.selectedtask)}
        dispatch={dispatch}
      />
      {state.tasks.map((taskItem) => (
        <Task key={taskItem.id} tasks={taskItem} dispatch={dispatch} />
      ))}
    </div>
  )
}
