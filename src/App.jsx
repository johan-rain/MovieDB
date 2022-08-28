import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import CurrentFilms from './pages/CurrentFilms'
import TopFilms from './pages/TopFilms'
import PopularFilms from './pages/PopularFilms'
import GenrePage from './pages/GenrePage'
import GenresPage from './pages/GenresPage'
import ActorsPage from './pages/ActorsPage'
import './assets/scss/App.scss'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/current" element={<CurrentFilms />} />
				<Route path="/popular" element={<PopularFilms />} />
				<Route path="/toplist" element={<TopFilms />} />
				<Route path="/actor/:id" element={<ActorsPage />} />
				<Route path="/genres" element={<GenresPage />} />
				<Route path="/genres/:id" element={<GenrePage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
