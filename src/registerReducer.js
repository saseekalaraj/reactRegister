import { CREATE_REGISTER } from "./registerConstant"
import { registerReducer } from "./reducerUtils"

const initialState = [
        {fullName:'',nicNumber:'',email:'',username:'',password:''}
]
const createEvent = (state, payload) => {
    return [...state, payload.data]
}
export default registerReducer(initialState,{
    [CREATE_REGISTER]:createEvent
})