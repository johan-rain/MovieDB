import { useQuery } from "react-query";
import MovieAPI from "../services/MovieAPI"

const usePopular = () => {
	return useQuery("now-playing", MovieAPI.getNowPlaying);
};

export default usePopular;
