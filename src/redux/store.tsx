import {createStore} from "redux";

const initialState = {
    items: [],
    auth: false
}

const reducer = (state: any = initialState, action:any) => {
    switch (action.type) {
        case "ADD_NEW_ITEM":
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case "AUTH":
            return {
                ...state,
                auth: true
            }
        case "DELETE_ITEM":
            return {
                ...state,
                items: state.items.filter((item: any) => item.id !== action.payload)
            }
        default:
            return state;
    }
}
const store = createStore(reducer);

export default store;