import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";

import { useDispatch } from "react-redux";
import { van } from "../features/cart/cartSlice";
import { useSelector } from "react-redux";

const ConfirmationPage = () => {
	const order = useSelector((state) => state.cart.van);

	return (
		<Container className="justify-content-md-center">
			<Col
				lg={{ span: 5, offset: 5 }}
				md={{ span: 7, offset: 4 }}
				sm={{ span: 10, offset: 4 }}
			>
				<Card className="text-center mt-4 w-50 ">
					<h1>Tack!</h1>
					<p>Du är snart en ägare av din dröm van</p>
					<ListGroup variant="flush">
						<ListGroup.Item>{order.type}</ListGroup.Item>
						<ListGroup.Item>{order.model}</ListGroup.Item>
						<ListGroup.Item>{order.color}</ListGroup.Item>
						<ListGroup.Item>{order.price} kr</ListGroup.Item>
					</ListGroup>
				</Card>
			</Col>
		</Container>
	);
};

export default ConfirmationPage;
