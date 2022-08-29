import { useQuery } from "react-query";
import MovieAPI from "../services/MovieAPI"

const useFilm = (id) => {
	return useQuery(["movie", id], () => MovieAPI.getMovie(id));
};

export default useFilm;
