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

export const likedAnime = (email, title) => dispatch => api.user.likedAnime(email, title);

export const unlikeAnime = (email, title) => dispatch => api.user.unlikeAnime(email, title);