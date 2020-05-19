import * as ACTION_TYPES from '../constants/user'
export const initialState = {loggedIn:false};
export const user = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.USER_LOGIN:
            return {loggedIn: true};
        case ACTION_TYPES.USER_LOGOUT:
            return {loggedIn: false};
    }
    return state
};
