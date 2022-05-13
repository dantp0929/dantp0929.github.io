import React from "react";
import { Container, Nav, Navbar, Button, Image} from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'

function NavBar() {
	return (
		<Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
			<Container>
				<LinkContainer to="/">
					<Navbar.Brand href="#home">
						<img
							// src={logo}
							// width="150"
							// height="30"
							// className="d-inline-block align-top logo"
							// alt="Solarbitrage logo"
						/>
					</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<LinkContainer to="/">
							<Nav.Link>
								Home
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/about">
							<Nav.Link>
								About
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/Contact">
							<Nav.Link>
								Contact
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/More">
							<Nav.Link>
								More
							</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavBar;