import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import GenresPage from "./pages/GenresPage";
import PickGenrePage from "./pages/PickGenrePage"
import FilmInfoPage from "./pages/FilmInfoPage"
import ActorsPage from "./pages/ActorsPage"
import "./assets/scss/App.scss";

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/genres" element={<GenresPage />} />
				<Route path="/genres/:name/:id" element={<PickGenrePage />} />
				<Route path="/movie/:id" element={<FilmInfoPage />} />
				<Route path="/actor/:id" element={<ActorsPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
