import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import useGenres from "../hooks/useGenres";
import LoadingSpinner from "../components/LoadingSpinner";

const GenresPage = () => {
	const { data: genres, isLoading } = useGenres();

	return (
		<Container className="py-3">

			{isLoading && <LoadingSpinner />}

			{genres && (
				<div className="white-container ">

					<h1 className="mb-5 d-flex justify-content-center">Genres</h1>
						{genres.genres.map((genre) => (
							<div className="d-flex justify-content-center mb-2">
								<Link className="genre-btn" to={`/genres/${genre.name}`}> {genre.name}</Link>
							</div>
						))}

				</div>
			)}
			
		</Container>
	);
};

export default GenresPage;
