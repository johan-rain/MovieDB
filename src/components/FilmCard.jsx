import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import LoadingSpinner from "./LoadingSpinner";

const MovieCard = ({ movie }) => {
	const [poster, setPoster] = useState("");
	const [loading, setLoading] = useState("true");

	useEffect(() => {
		setTimeout(() => {
			if (!movie.poster_path) {
				setPoster(
					"https://via.placeholder.com/300x450?text=Poster+Not+Found"
				);
			} else {
				setPoster(
					`https://image.tmdb.org/t/p/w300${movie.poster_path}`
				);
			}

			setLoading(false);
		}, 1000);
	}, []);

	return (
		<>
			{loading && <LoadingSpinner />}

			{poster && (

				<Link to={`/movie/${movie.id}`}>
					
					<Card border="dark" className="bg-light movie-card">
						<img className=" movie-img" src={`${poster}`} />
					</Card>

					<p className="film-text">{movie.title}</p>

				</Link>
			)}
		</>
	);
};

export default MovieCard;
