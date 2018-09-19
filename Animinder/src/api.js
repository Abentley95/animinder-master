import axios from 'axios';

const externalCall = axios.create({
    baseURL: 'https://api.jikan.moe',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
  });

export default {
    user: {
        signup: user =>  axios.post('/api/users', { user }).then(res => res.data.user),
        likedAnime: (email, result) =>  axios.post('/api/users/liked_anime', { email, result }),
        unlikeAnime: (email, result) =>  axios.post('/api/users/unlike_anime', { email, result }),
        allLikedAnime: (email) =>  axios.post('/api/users/all_liked_anime', {email}).then(res => res),
        login: credentials => axios.post('/api/auth', {credentials}).then(res => res.data.user),
        confirm: token => axios.post('/api/auth/confirmation', { token }).then(res => res.data.user),
        resetPasswordRequest: email => axios.post('/api/auth/reset_password_request', { email }),
        validateToken: token => axios.post('/api/auth/validate_token', { token }),
        resetPassword: data => axios.post('/api/auth/reset_password', { data }),
    },
    anime: {
        // allLikedAnime: () =>  axios.get('/api/anime/all_liked_anime').then(res => res.data.user),
        // likedAnime: (email, title) =>  axios.post('/api/anime/liked_anime', { email, title }).then(res => res.data.user),
        // unlikeAnime: (email, title) =>  axios.post('/api/anime/unlike_anime', { email, title }).then(res => res.data.user),
    },
    external: {
        searchAnime: searchedText => externalCall.get(`/search/anime?q=${searchedText}&page=1`),
        deepSearchAnime: malId => externalCall.get(`/anime/${malId}`),
    }
};