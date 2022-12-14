import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ActorCard from "./ActorCard";

const MovieDetails = ({ movie }) => {

	const release_date = (movie.release_date);
	const hours = Math.floor(movie.runtime / 60);
	const minutes = movie.runtime % 60;

	return (
		<>
			<Container>

				<div className="d-flex justify-content-between w-100 align-items-center">
					
					<div>
						<h1>{movie.title}</h1>
						<span className="text-muted pe-1">{release_date}</span>
						<span className="text-muted">{hours}h {minutes}m</span>
					</div>

				</div>

				<div className="d-flex mt-2">
					<img className="fluid w-25" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}></img>
				</div>

				<div className="d-flex justify-content-between mt-3">

					<div>
						{movie.genres.map((genre, i) => (
							<Badge key={i} as={Link} to={`/genres/${genre.name}/${genre.id}`} className="p-2 m-1" bg="success" text="light">
								{genre.name}
							</Badge>
						))}
					</div>

				</div>

				<h4 className="mt-3 mb-3">{movie.tagline}</h4>

				<p>{movie.overview}</p>

				<div className="pt-2">

					<p>Cast (in credits order)</p>

					<Row>
						{movie.credits.cast.map((actor) => (
							<Col lg={2} md={4} sm={6} key={actor.id} className="pb-3">
								<ActorCard actor={actor} />
							</Col>
						))}
					</Row>

				</div>

			</Container>
		</>
	);
};

export default MovieDetails;
