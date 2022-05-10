import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
	const [email, setEmail] = useState("test@mail.com");
	const [password, setPassword] = useState("test123");
	const auth = getAuth();
	const history = useHistory();

	const handleLogin = async (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log("Singed in user: ", user);
				history.push("/");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log("An error occured: ", errorCode, errorMessage);
			});
	};

	return (
		<Container>
			<h1>Login</h1>
			<Form onSubmit={handleLogin}>
				<Form.Group className="mb-3" controlId="formGroupEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formGroupPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>{" "}
				</Form.Group>
				<Button type="submit">Log In</Button>
			</Form>
		</Container>
	);
};

export default LoginPage;
