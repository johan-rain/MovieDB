import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="md">

			<Container>
				<Navbar.Brand as={Link} to="/">MovieDB</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/current">Current Movies</Nav.Link>
						<Nav.Link as={NavLink} end to="/popular">Popular Movies</Nav.Link>
						<Nav.Link as={NavLink} end to="/toplist">Toplist</Nav.Link>
						<Nav.Link as={NavLink} end to="/genres">Genres</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
			
		</Navbar>
	)
}

export default Navigation
