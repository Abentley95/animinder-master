/* eslint-disable */
import api from "../api";
import { userLoggedIn } from "./auth";

export const signup = data => dispatch =>
  api.user.signup(data).then(user => {
    localStorage.animinderJWT = user.token;
    dispatch(userLoggedIn(user));
});

export const allLikedAnime = () => dispatch => api.anime.allLikedAnime();

export const likedAnime = (email, title) => dispatch => api.user.likedAnime(email, title);

export const unlikeAnime = (email, title) => dispatch => api.user.unlikeAnime(email, title);