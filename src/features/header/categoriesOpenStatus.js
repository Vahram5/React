export const categoriesOpenStatusReducer = (state={}, action) => {
    if(action.type === "changeStatuss"  || action.type === "changeStatus2" ){
        return (action.payload.status)
    }
    return state
}
export const editCategoriesOpenStatus = (preStatus) => {
    if(preStatus){
        return {
                type: "changeStatus2",
                payload: {
                    status: !preStatus
                }
            }
    }
    return {
        type: "changeStatuss",
        payload: {
            status: !preStatus
        }
    }
}
export const SelectCategoriesOpenStatus = (state) => {
    return state.categoriesOpenStatus
}