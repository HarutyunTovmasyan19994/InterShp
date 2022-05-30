import { iAction, iUserData } from "../../interface";

export interface iTodo {
    user: iUserData[]
}

const defaultState: iTodo = {
    user: [],
}


export const reducer = (state = defaultState, action: iAction) => {
    switch (action.type) {
        case "ADD_PERSON":
            return { ...state, user: action.payload }
        case "DEFAULT_REDUX":
                return defaultState
        default:
            return state
    }
}