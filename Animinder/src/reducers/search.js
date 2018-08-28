import { SEARCH_RESULTS, DEEP_SEARCH_RESULTS } from "../types";

export default function search (state = {}, action = {}) {
     switch(action.type) {
        case SEARCH_RESULTS:
             return action.results.data.result;
        case DEEP_SEARCH_RESULTS:
             return action.results;
        default:
             return state;
     }
}