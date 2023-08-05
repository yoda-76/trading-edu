import { createContext, useContext, useReducer } from "react"
export const StateContext= createContext()
export const StateProvider=({initialState, children, reducer})=>{
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
}
export const useStateValue=()=>useContext(StateContext)