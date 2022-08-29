import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useFilm from "../hooks/useFilm";
import FilmInfo from "../components/FilmInfo"
import LoadingSpinner from "../components/LoadingSpinner";

const FilmInfoPage = () => {
	const { id } = useParams();
	const { data: movie, isLoading } = useFilm(id);

	return (
		<Container className="white-container">

			{isLoading && <LoadingSpinner />}
			{movie && <FilmInfo movie={movie} />}
		
		</Container>
	);
};

export default FilmInfoPage;