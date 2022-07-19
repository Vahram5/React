export const SelectSearchValue = (state) => {
    return(state.searchValue)
}

export const searchReducer = (state={}, action) => {
    if(action.type === "inputValue"){
        return (action.payload.text)
    }

    return state
}

export const editSearchInput = (newValue) => {
    return ({
        type:"inputValue",
        payload:{
            text: newValue
        }
    })
}

