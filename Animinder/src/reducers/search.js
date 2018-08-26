import { SEARCH_RESULTS } from "../types";

export default function search (state = {}, action = {}) {
     switch(action.type) {
        case SEARCH_RESULTS:
             return action.results.data.result;
        default:
             return state;
     }
}