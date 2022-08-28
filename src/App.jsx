import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import './assets/scss/App.scss'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/current" element={<HomePage />} />
				<Route path="/popular" element={<HomePage />} />
				<Route path="/toplist" element={<HomePage />} />
				<Route path="/actor/:id" element={<HomePage />} />
				<Route path="/genres" element={<HomePage />} />
				<Route path="/genres/:id" element={<HomePage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
