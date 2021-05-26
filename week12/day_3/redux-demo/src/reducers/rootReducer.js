const initialState = {
    counter: 0,
    userName: ""
}

function rootReducer(state = initialState,action){
    switch(action.type){
        case "ADD":
            return { counter: state.counter + 1 }
        case "SUBTRACT":
            return { counter: state.counter -1 }
        default:
            return state
    }
}

export default rootReducer;