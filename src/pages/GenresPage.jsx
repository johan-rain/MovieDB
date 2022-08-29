import React from "react";
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

					<h2 className="mb-5 d-flex justify-content-center">Genres</h2>

				</div>
			)}
			
		</Container>
	);
};

export default GenresPage;
