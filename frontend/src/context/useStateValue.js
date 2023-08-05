import { useContext } from "react"
import { StateContext } from "./stateProvider"
 const useStateValue=()=>{
    
    return useContext(StateContext)
}
export default useStateValue