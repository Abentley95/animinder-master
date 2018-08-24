/* eslint-disable */
import api from "../api";

export const searchAnime = searchedText => () => api.external.searchAnime(searchedText);