import {createStore} from "redux";

const initialState = {
    items: []
}

const reducer = (state: any = initialState, action:any) => {
    switch (action.type) {
        case "ADD_NEW_ITEM":
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        default:
            return state;
    }
}
const store = createStore(reducer);

export default store;