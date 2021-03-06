import { USER_LOGGED_IN, USER_LOGGED_OUT, ALL_LIKED_ANIME } from "../types";

export default function user (state = {}, action = {}) {
    switch(action.type) {
        case USER_LOGGED_IN:
            return action.user;
        case USER_LOGGED_OUT:
            return {};
        case ALL_LIKED_ANIME:
            return Object.assign({}, state,  action.data.data);
        default:
            return state;
    }
}