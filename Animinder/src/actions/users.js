/* eslint-disable */
import api from "../api";
import { ALL_LIKED_ANIME } from "../types";

export const fetchAllAnime = data => ({
    type: ALL_LIKED_ANIME,
    data
});

export const signup = data => dispatch =>
  api.user.signup(data).then(user => {
    localStorage.animinderJWT = user.token;
    dispatch(userLoggedIn(user));
});

export const allLikedAnime = (email) => dispatch => {
    api.user.allLikedAnime(email).then((data) => {
        dispatch(fetchAllAnime(data));
    });
};

export const likedAnime = (email, result) => dispatch => api.user.likedAnime(email, result);

export const unlikeAnime = (email, result) => dispatch => api.user.unlikeAnime(email, result);