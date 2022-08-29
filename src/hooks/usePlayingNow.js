import { useQuery } from "react-query";
import MovieAPI from "../services/MovieAPI";

const usePlayingNow = () => {
	return useQuery("now-playing", MovieAPI.getNowPlaying);
};

export default usePlayingNow;
