import React from "react";
import { Container } from "react-bootstrap";

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

			</Container>
		</>
	);
};

export default ActorDetails;