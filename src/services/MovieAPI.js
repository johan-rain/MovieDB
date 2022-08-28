import axios from 'axios'

const API_KEY = "?api_key=cb7818f49d905d77dbc81f10a94752b9&language=en-US"
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

// Get trending movies
const getCurrentMovies = async () => {
	return await axios.get(`movie/now_playing?api_key=${API_KEY}`)
}

// Get popular movies
const getPopularMovies = async () => {
	return await axios.get(`movie/popular?api_key=${API_KEY}`)
}

// Get the highest rated movies
const getTopRatedMovies = async () => {
	return await axios.get(`movie/top_rated?api_key=${API_KEY}`)
}

// Get a movie with info and actors
const getMovie = async (id) => {
	return await axios.get(`/movie/${id}?api_key=${API_KEY}&append_to_response=credits,similar`)
}

// Get an actor with an id
const getActor = async (id) => {
	return await axios.get(`/person/${id}?api_key=${API_KEY}&append_to_response=combined_credits`)
}

// Get all genres
const getGenres = async () => {
	return await axios.get(`/genre/movie/list?api_key=${API_KEY}`)
}

// Get only one genre
const getGenre = async (genre) => {
	return await axios.get(`/discover/movie?api_key=${API_KEY}&with_genres=${genre}`)
}

const exports = {
	getCurrentMovies,
	getPopularMovies,
	getTopRatedMovies, 
	getMovie,
	getActor,
	getGenres,
	getGenre,
}

export default exports