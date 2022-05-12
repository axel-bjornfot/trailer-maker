import { end } from "@popperjs/core";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Offcanvas from "react-bootstrap/Offcanvas";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useSelector } from "react-redux";
import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import ProductImg from "../components/ProductImg";
import { collection, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch } from "react-redux";
import { increase, detract, change } from "../features/cart/cartSlice";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Van = () => {
	const dispatch = useDispatch();
	const [color, setColor] = useState("blue");
	const [type, setType] = useState("standard");
	const price = useSelector((state) => state.cart.price);

	if (type == "standard") {
		dispatch(change(70000));
	}

	const colors = [
		{ name: "blue", value: 10000 },
		{ name: "red", value: 10000 },
	];

	const variants = [
		{ name: "standard", value: 70000 },
		{ name: "deluxe", value: 100000 },
	];

	const qRef = query(collection(db, "van"), where("color", "==", color));

	const colorChange = (e) => {
		setColor(e.target.name);
		console.log("type ", e.target.value);
	};

	const variantChange = (e) => {
		setType(e.target.name);
		dispatch(change(e.target.value));
		console.log("type ", e.target);
	};

	const { isLoading, data, refetch } = useFirestoreQueryData(["van"], qRef, {
		subscribe: true,
	});

	useEffect(async () => {
		await refetch();
	}, [color, type]);

	return (
		<Container fluid>
			<Row>
				<Col md={7} lg={{ span: 7, offset: 1 }}>
					<Card className="text-center mt-4">
						<ProductImg data={data} isLoading={isLoading} />

						<h4> Pris: {price} kr </h4>
						<Button>Lägg beställning</Button>
					</Card>
				</Col>
				<Col md={5} lg={3}>
					<Card className="text-center mt-4">
						<Card.Header>
							<h2>Campervan</h2>
						</Card.Header>
						<Card.Body>
							<p>
								Priser och tillval kommer att färdigställas när
								leveransen närmar sig. Du kommer att få ett
								meddelande om att slutföra din beställning när
								det slutgiltiga priset och tillvalen
								offentliggörs Fram tills dess kommer din order
								betraktas som en förbeställning som du kan
								avbryta mot fullständig återbetalning.
							</p>

							<Card className="text-center mt-4">
								<Card.Body>
									<Card.Title>
										Välj vilken färg du vill ha på bilen
									</Card.Title>
									<ButtonGroup className="mb-2">
										{colors.map((colors, idx) => (
											<ToggleButton
												key={idx}
												id={`color-${idx}`}
												type="radio"
												variant="secondary"
												name={colors.name}
												value={colors.value}
												checked={color === colors.name}
												onChange={(e) => colorChange(e)}
											>
												{colors.name}
											</ToggleButton>
										))}
									</ButtonGroup>
								</Card.Body>
							</Card>

							<Card className="text-center mt-4">
								<Card.Body>
									<Card.Title>
										Välj vilken model du vill ha
									</Card.Title>
									<ButtonGroup className="mb-2">
										{variants.map((variant, idx) => (
											<ToggleButton
												key={idx}
												id={`variant-${idx}`}
												type="radio"
												variant="secondary"
												name={variant.name}
												value={variant.value}
												checked={type === variant.name}
												onChange={(e) =>
													variantChange(e)
												}
											>
												{variant.name}
											</ToggleButton>
										))}
									</ButtonGroup>
								</Card.Body>
							</Card>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Van;
