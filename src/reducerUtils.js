export const registerReducer = (initialState, fnMap) => {
    return (state = initialState, { type, payload }) => {
        const handler = fnMap[type]
        return handler ? handler(state, payload) : state
    }
}