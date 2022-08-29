import { useQuery } from "react-query";
import MovieAPI from "../services/MovieAPI";

const useFilmGenre = (id, page) => {
	return useQuery(
		["moviesbygenre", { id, page }],
		() => MovieAPI.getMoviesByGenre(id, page),
		{ keepPreviousData: true }
	);
};

export default useFilmGenre;
