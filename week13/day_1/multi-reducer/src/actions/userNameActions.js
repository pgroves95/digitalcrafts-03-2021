export const changeUserName = (dispatch, inputValue) => {
    return dispatch({type: "SET_USERNAME", payload: inputValue})
}