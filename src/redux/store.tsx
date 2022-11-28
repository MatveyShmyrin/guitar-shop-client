import {createStore} from "redux";

const initialState = {
    items: [],
    auth: false,
    sortType: "",
    acousticType: true,
    electroType: true,
    minPrice: 1,
    maxPrice: 99999
}

const reducer = (state: any = initialState, action:any) => {
    switch (action.type) {
        case "ADD_NEW_ITEM":
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case "SET_ITEMS":
            return {
                ...state,
                items: action.payload
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
        case "SORT_ITEMS_CHANGE_TYPE":
            return {
                ...state,
                sortType: action.payload
            }
        case "SORT_ITEMS_A-Z":
            return {
                ...state,
                items: state.items.sort((a: any, b:any) =>
                    {
                        var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                        if (nameA < nameB)
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0
                    }
                )
            }
        case "SORT_ITEMS_Z-A":
            return {
                ...state,
                items: state.items.sort((a: any, b:any) =>
                    {
                        var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                        if (nameB < nameA)
                            return -1
                        if (nameB > nameA)
                            return 1
                        return 0
                    }
                )
            }
        case "SORT_ITEMS_MIN-MAX":
            return {
                ...state,
                items: state.items.sort((a: any, b:any) =>
                    {
                        return a.price - b.price;
                    }
                )
            }
        case "SORT_ITEMS_MAX-MIN":
            return {
                ...state,
                items: state.items.sort((a: any, b:any) =>
                    {
                        return b.price - a.price;
                    }
                )
            }
        case "FILTER_ITEMS_ELECTRO_TYPE":
            return {
                ...state,
                electroType: action.payload
            }
        case "FILTER_ITEMS_ACOUSTIC_TYPE":
            return {
                ...state,
                acousticType: action.payload
            }
        case "FILTER_ITEMS_MIN_PRICE":
            return {
                ...state,
                minPrice: action.payload
            }
        case "FILTER_ITEMS_MAX_PRICE":
            return {
                ...state,
                maxPrice: action.payload
            }
        default:
            return state;
    }
}
const store = createStore(reducer);

export default store;