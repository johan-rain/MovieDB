import React from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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

					<Row>
						{movies.results.map((movie) => (
							<Col lg={4} key={movie.id}>
								<FilmCard movie={movie} />
							</Col>
						))}
					</Row>
				</div>
			)}
		</Container>
	);
};

export default PickGenrePage;
