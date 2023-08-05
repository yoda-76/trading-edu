export const initialState={userName:null, email:'null' }
 const reducer=(state, action)=>{
    switch(action.type){
        case "SETUSERNAME": return {...state, userName:action.userName}
        default : return state
    }
}
export default reducer;