import React from "react";
import { Container, Nav, Navbar, Button, Image} from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'

function NavBar() {
	return (
		<Navbar collapseOnSelect expand="lg" sticky="top">
			<Container>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<LinkContainer to="/">
							<Nav.Link>
								<p>Home</p>
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/about">
							<Nav.Link>
								<p>About</p>
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/contact">
							<Nav.Link>
								<p>Contact</p>
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/more">
							<Nav.Link>
								<p>More</p>
							</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavBar;