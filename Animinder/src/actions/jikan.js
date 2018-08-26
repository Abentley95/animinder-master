/* eslint-disable */
import api from "../api";
import { SEARCH_RESULTS } from '../types';

export const searchResults = (results) => ({
    type: SEARCH_RESULTS,
    results
});

export const searchAnime = searchedText => dispatch => {
    api.external.searchAnime(searchedText).then(results => {
        dispatch(searchResults(results));
    });
};