export const ACTION = {
  ADD_TASK: "ADD_TASK",
  DELETE_TASK: "DELETE_TASK",
  EDIT_TASK: "EDIT_TASK",
  COMPLETE_TASK: "COMPLETE_TASK",
  START_EDIT_MODE: "START_EDIT_MODE",
  CANCEL_EDIT_MODE: "CANCEL_EDIT_MODE",
  SAVE_EDIT_MODE: "SAVE_EDIT_MODE",
} as const

export type task = {
  id: number
  title: string
  date: string
  status: boolean
}

export type action_type =
  | { type: typeof ACTION.ADD_TASK; payload: task }
  | { type: typeof ACTION.DELETE_TASK; payload: number }
  | { type: typeof ACTION.EDIT_TASK; payload: task }
  | { type: typeof ACTION.COMPLETE_TASK; payload: number }
  | { type: typeof ACTION.START_EDIT_MODE; payload: number }
  | { type: typeof ACTION.CANCEL_EDIT_MODE }
  | { type: typeof ACTION.SAVE_EDIT_MODE; payload: task }
