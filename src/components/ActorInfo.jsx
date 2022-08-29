import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FilmCard from "./FilmCard"

const ActorDetails = ({ actor }) => {

	return (
		<>
			<Container className="white-container">
				
				<div className="d-flex justify-content-between w-100 align-items-center">
					<div>
						<h1>{actor.name}</h1>
					</div>
				</div>

				<div className="d-flex mt-2 justify-content-between align-items-start">

					<img className="fluid w-25"
						src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}>
					</img>

					<p className="w-75 ms-5">{actor.biography}</p>

				</div>

				<div className="pt-5">

					<h2>Starred in</h2>

					<Row>
						{actor.movie_credits.cast.map((movie, i) => (
							<Col lg={2} md={4} sm={10} key={i} className="pb-2">
								<FilmCard movie={movie} />
							</Col>
						))}
					</Row>

				</div>

			</Container>
		</>
	);
};

export default ActorDetails;