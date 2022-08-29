import React from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import useFilmGenre from "../hooks/useFilmGenre"
import FilmCard from "../components/FilmCard"
import { useSearchParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const PickGenrePage = () => {
	const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
	const page = searchParams.get("page")
	const { id, name } = useParams();
	const { data: movies, isLoading } = useFilmGenre(id, page);

	return (
		<Container>
			{isLoading && <LoadingSpinner />}
			{movies && (
				<div className="white-container">

					<div className="d-flex justify-content-center">
						<h2>{name}</h2>
					</div>

                    {movies.results.map((movie) => (

                        <FilmCard movie={movie} />

                    ))}
				</div>
			)}
		</Container>
	);
};

export default PickGenrePage;
