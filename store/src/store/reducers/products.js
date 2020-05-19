import * as ACTION_TYPES from '../constants/products'
export const initialState = ['initial state']
export const products = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_PRODUCT:
            return [...state, action.payload];
        case ACTION_TYPES.REMOVE_PRODUCT:
            return state.filter(item=>item!==action.payload.name)
    }
    return state
};
