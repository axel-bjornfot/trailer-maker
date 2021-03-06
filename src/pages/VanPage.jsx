import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useSelector } from "react-redux";
import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import ProductImg from "../components/ProductImg";
import { collection, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch } from "react-redux";
import { increase, detract, change, van } from "../features/cart/cartSlice";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router-dom";

const Van = () => {
	const history = useHistory();
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
	};

	const variantChange = (e) => {
		setType(e.target.name);
		dispatch(change(e.target.value));
	};

	const { isLoading, data, refetch } = useFirestoreQueryData(["van"], qRef, {
		subscribe: true,
	});

	const handelOrder = () => {
		const order = { color, type, price, model: "Van" };
		dispatch(van(order));
		history.push("/confirm");
	};

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
						<Button onClick={() => handelOrder()}>
							L??gg best??llning
						</Button>
					</Card>
				</Col>
				<Col md={5} lg={3}>
					<Card className="text-center mt-4">
						<Card.Header>
							<h2>Van</h2>
						</Card.Header>
						<Card.Body>
							<p>
								Priser och tillval kommer att f??rdigst??llas n??r
								leveransen n??rmar sig. Du kommer att f?? ett
								meddelande om att slutf??ra din best??llning n??r
								det slutgiltiga priset och tillvalen
								offentligg??rs Fram tills dess kommer din order
								betraktas som en f??rbest??llning som du kan
								avbryta mot fullst??ndig ??terbetalning.
							</p>

							<Card className="text-center mt-4">
								<Card.Body>
									<Card.Title>
										V??lj vilken f??rg du vill ha p?? bilen
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
										V??lj vilken model du vill ha
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
