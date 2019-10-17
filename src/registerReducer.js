import { CREATE_REGISTER } from "./registerConstant"

const initialState = {
    data: [
        {fullName:'Sellathurrai Saseekalaraj',nicNumber:'941300480v',email:'sasee9488@gmail.com',username:'sasee0206',password:'12345'}
    ]
}
const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_REGISTER:
            return {
                ...state.data, data: state.data
            }
        default:
            return state
    }
}
export default registerReducer