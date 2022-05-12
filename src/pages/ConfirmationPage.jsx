import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useDispatch } from "react-redux";
import { increase, detract, change, van } from "../features/cart/cartSlice";
import { useSelector } from "react-redux";

const ConfirmationPage = () => {
	const dispatch = useDispatch();
	const order = useSelector((state) => state.cart.van);

	return (
		<Container className="item-center">
			<Card className="text-center mt-4 w-50">
				<h1>Tack!</h1>
				<p>Du är snart en ägare av din dröm van</p>
				<p>{order.type}</p>
				<p>{order.model}</p>
				<p>{order.color}</p>
				<p>{order.price} kr</p>
			</Card>
		</Container>
	);
};

export default ConfirmationPage;
