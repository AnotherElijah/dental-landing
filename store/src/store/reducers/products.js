import * as ACTION_TYPES from '../constants/products'
export const products = (state = [], action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_PRODUCT:
            return [...state, action.payload];
        case ACTION_TYPES.REMOVE_PRODUCT:
            return state.filter(item=>{
                    console.log(item.name+"--"+action.payload)
                    return item.name!==action.payload}
                )
    }
    return state
};
