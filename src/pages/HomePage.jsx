import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { collection, query } from "firebase/firestore";
import { db } from "../firebase";

const HomePage = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	// const history = useHistory();

	const qRef = query(collection(db, "thumbnails"));

	const data = useFirestoreQueryData(["thumbnails"], qRef, {
		subscribe: true,
	});

	return (
		<>
			<Container id="Homepage">
				<Card className="homepageBtnCard">
					<Button variant="flat" onClick={handleShow}>
						Bygg din van
					</Button>
				</Card>
			</Container>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Välj van</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{!data.isLoading &&
						data.data.map((img, idx) => (
							<Button key={idx} as={Link} to={img.type}>
								<Image thumbnail src={img.url}></Image>
							</Button>
						))}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="flat" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default HomePage;
