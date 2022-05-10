import { end } from "@popperjs/core";
import React from "react";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";

const Van = () => {
	return (
		<>
			<Container></Container>
			<Offcanvas
				show={true}
				placement={end}
				backdrop={false}
				scroll={false}
			>
				<Offcanvas.Header>
					<Offcanvas.Title>Campervan</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					Some text as placeholder. In real life you can have the
					elements you have chosen. Like, text, images, lists, etc.
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default Van;
