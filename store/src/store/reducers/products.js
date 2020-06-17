import * as ACTION_TYPES from '../constants/products'
export const products = (state = [], action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_PRODUCT:
            return [...state, action.payload];
        case ACTION_TYPES.REMOVE_PRODUCT:
            console.log(action)
            return state.filter(item=>item!==action.payload.name)
    }
    return state
};
