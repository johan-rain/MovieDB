import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FilmCard from "../components/FilmCard"
import usePlayingNow from "../hooks/usePlayingNow"
import useTopRated from "../hooks/useTopRated";
import usePopularFilms from "../hooks/usePopularFilms"
import LoadingSpinner from "../components/LoadingSpinner";

const HomePage = () => {
	const { data: popularMovies, isError, isLoading } = usePlayingNow();
	const { data: nowPlaying } = usePopularFilms();
	const { data: topRated } = useTopRated();

	return (
		<Container fluid="lg" className="py-3">

			{isError && <p>Something is wrong</p>}

			{isLoading && <LoadingSpinner />}

			{popularMovies && nowPlaying && topRated && (
				<>
					<div className="white-container">

						<h2 className="mb-5 d-flex justify-content-center">Popular Movies</h2>

						<Row>
							{popularMovies.results.map((movie) => (
								<Col lg={3} md={4} sm={10} key={movie.id}className="pb-5">
									<FilmCard movie={movie} />
								</Col>
							))}
						</Row>

					</div>

					<div className="white-container">

						<h2 className="mb-5 d-flex justify-content-center">Playing Now</h2>

						<Row>
							{nowPlaying.results.map((movie) => (
								<Col lg={3} md={4} sm={10} key={movie.id} className="pb-5">
									<FilmCard movie={movie} />
								</Col>
							))}
						</Row>
						
					</div>

					<div className="white-container">
						
						<h2 className="mb-5 d-flex justify-content-center">Top Rated</h2>
						
						<Row>
							{topRated.results.map((movie) => (
								<Col lg={3} md={4} sm={10} key={movie.id} className="pb-5">
									<FilmCard movie={movie} />
								</Col>
							))}
						</Row>

					</div>
				</>
			)}
		</Container>
	);
};

export default HomePage;