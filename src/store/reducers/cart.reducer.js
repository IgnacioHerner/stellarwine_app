import { cartTypes } from "../types";
const {ADD_TO_CART, REMOVE_FROM_CART, CONFIRM_ORDER} = cartTypes;
import { sumTotal } from '../../utils'
const initialState = {
    items:[],
    total: 0,
    loading: false,
    error: null
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            let uptadeCart = [];
            if(state.items.find(item => item.id === action.item.id)){
                uptadeCart = state.items.map(item => {
                    if(item.id === action.item.id) item.quantity += 1;
                    return item;
                })
            } else {
                const item = { ...action.item, quantity: 1};
                uptadeCart = [...state.items, item]
            }
            return {
                ...state,
                items: uptadeCart,
                total: sumTotal(uptadeCart),
            }
        case REMOVE_FROM_CART:
            const filteredCart = state.items.filter((item) => item.id !== action.id);
            return {
                ...state,
                items: filteredCart,
                total: sumTotal(filteredCart),
            };
        case CONFIRM_ORDER:
            if (action.result) {
            return {
                ...state,
                items: [],
                total: 0,
            };
        }
        return {
            ...state,
            error: action.error,
        };
        default:
            return state;
    }
}

export default cartReducer;