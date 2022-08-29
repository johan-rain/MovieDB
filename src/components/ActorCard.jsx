import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import LoadingSpinner from "./LoadingSpinner";

const ActorCard = ({ actor }) => {
	const [poster, setPoster] = useState("");
	const [loading, setLoading] = useState("true");

	useEffect(() => {
		setTimeout(() => {
			if (!actor.profile_path) {
				setPoster(
					"https://via.placeholder.com/300x450?text=Poster+Not+Found"
				);
			} else {
				setPoster(
					`https://image.tmdb.org/t/p/w300${actor.profile_path}`
				);
			}
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<>
			{loading && <LoadingSpinner />}

			{poster && (

				<Link to={`/actor/${actor.id}`}>

					<Card border="dark" className="bg-light movie-card">
						<img className=" movie-img" src={`${poster}`} />
					</Card>

					<p className="actor-name mt-2">{actor.name}</p>

					<p className="actor-name text-muted"> as {actor.character}</p>

				</Link>
			)}

		</>
	);
};

export default ActorCard;
