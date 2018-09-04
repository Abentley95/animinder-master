/* eslint-disable */
import api from "../api";
import { userLoggedIn } from "./auth";

export const signup = data => dispatch =>
  api.user.signup(data).then(user => {
    localStorage.animinderJWT = user.token;
    dispatch(userLoggedIn(user));
});

export const likedAnime = (email, title) => dispatch => api.user.likedAnime(email, title);