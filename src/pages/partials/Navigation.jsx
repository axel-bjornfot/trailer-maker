import React from "react";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<div>
						<Navbar.Brand to="/">
							Trailer Maker Sweden 🚛
						</Navbar.Brand>
					</div>
					<div>
						<Nav className="me-auto">
							<NavLink to="/" className="nav-link">
								Home
							</NavLink>
							<NavLink to="/hasttransport" className="nav-link">
								Hästtransport
							</NavLink>
							<NavLink to="/hastLastbil" className="nav-link">
								HästLastbil B-Kort
							</NavLink>
							<NavLink to="/jakvagn" className="nav-link">
								Jaktvagn
							</NavLink>
						</Nav>
					</div>
				</Container>
			</Navbar>
		</>
	);
};

export default Navigation;
