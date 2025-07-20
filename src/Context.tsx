import { createContext } from "react"
import type { Dispatch } from "react"
import type { action_type } from "./ConstantsType"

type ButtonTasksContextType = {
  dispatch: Dispatch<action_type>
}

export const ButtonTasksContext = createContext<ButtonTasksContextType | null>(
  null
)
