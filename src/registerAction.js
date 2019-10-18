import { CREATE_REGISTER } from "./registerConstant"

export const createRegister = (data) => {
    return {
        type: CREATE_REGISTER,
        payload:{
            data
        }
    }
}