import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const Navigation = () => {
	return (
		<Navbar bg="light" fixed="top" variant="light" expand="md">
			<Container>
				<Link to="/" className="navbar-brand">
					<span role="img" aria-label="A red truck">
						🚚
					</span>{" "}
					Truck makers
				</Link>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Button variant="flat" as={Link} to="/van">
							{" "}
							Van{" "}
						</Button>

						<Button variant="flat" as={Link} to="campervan">
							{" "}
							Campervan{" "}
						</Button>

						<Button variant="flat" as={Link} to="/jaktvagn">
							{" "}
							Jaktvagn{" "}
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
