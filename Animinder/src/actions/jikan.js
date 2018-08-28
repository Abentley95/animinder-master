/* eslint-disable */
import api from "../api";
import { SEARCH_RESULTS, DEEP_SEARCH_RESULTS } from '../types';

export const searchResults = (results) => ({
    type: SEARCH_RESULTS,
    results
});

export const deepSearchResults = (results) => ({
    type: DEEP_SEARCH_RESULTS,
    results
});

export const searchAnime = searchedText => dispatch => {
    api.external.searchAnime(searchedText).then(results => {
        dispatch(searchResults(results));
    });
};
export const deepSearchAnime = malId => dispatch => {
    api.external.deepSearchAnime(malId).then(results => {
        dispatch(deepSearchResults(results));
    });
};