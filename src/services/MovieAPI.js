import axios from "axios";
 
const BASE_URL = "https://api.themoviedb.org/3";
 
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
 
const FAKE_SLOW_API = false;
const FAKE_SLOW_API_DELAY = 2000;
 
const requestOptions = {
    params: {
        api_key: "cb7818f49d905d77dbc81f10a94752b9",
        language: "en-US",
        include_adult: false,
    },
};
 
 const get = async (endpoint, options) => {
     const res = await axios.get(endpoint, options);
 
     FAKE_SLOW_API &&
         (await new Promise((r) => setTimeout(r, FAKE_SLOW_API_DELAY)));
 
     return res.data;
 };

const getMovie = (id) => {
	return get(
		`${BASE_URL}/movie/${id}?&append_to_response=credits`, requestOptions);
};

const getActor = (id) => {
	return get(
		`${BASE_URL}/person/${id}?append_to_response=movie_credits`, requestOptions);
};

const getGenres = () => {
	return get(`${BASE_URL}/genre/movie/list`, requestOptions);
};

const getMoviesByGenre = (id, page) => {
	return get(
		`${BASE_URL}/discover/movie?&with_genres=${id}&page=${page}`,
		requestOptions
	);
};

const getPopularMovies = () => {
	return get(`${BASE_URL}/movie/popular`, requestOptions);
};

const getNowPlaying = () => {
	return get(`${BASE_URL}/movie/now_playing`, requestOptions);
};

const getTopRated = () => {
	return get(`${BASE_URL}/movie/top_rated`, requestOptions);
};

const getMoviePoster = (size, poster_path) => {
	return get(`${IMAGE_BASE_URL}/${size}/${poster_path}`);
};

const exports = {
	getMovie,
	getActor,
	getGenres,
	getMoviesByGenre,
	getPopularMovies,
	getNowPlaying,
	getTopRated,
	getMoviePoster,
};

export default exports;