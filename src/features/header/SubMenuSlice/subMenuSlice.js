export const submenuStatusReducer = (state={}, action) => {
    if(action.type === "changeStatus" || action.type === "changeStatus2"){
        return (action.payload.status)
    }
    return state
}
export const editOpenStatus = (preStatus) => {
        return {
            type: "changeStatus",
            payload: {
                status: !preStatus
            }
        }
}
export const SelectStatus = (state) => {
    return state.submenuStatus
}