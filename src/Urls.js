import { apiKey } from "./constants/Constant"

export const action =`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28`
export const originals =`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_networks=213`
export const trending =`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US`
export const HorrorMovies= `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`
export const RomanceMovies= `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=10749`