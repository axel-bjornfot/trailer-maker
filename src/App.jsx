import React, { useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navigation from "./pages/partials/Navigation";
import PageNotFound from "./pages/PageNotFound";

import VanPage from "./pages/VanPage";
import JaktvagnPage from "./pages/JaktvagnPage";
import CampervanPage from "./pages/CampervanPage";
import LoginPage from "./pages/LoginPage";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { saveUser } from "./features/auth/authSlice";
import { auth } from "../src/firebase";

function App() {
	const user = useSelector((state) => state.auth.value);
	console.log("user from state", user);
	const dispatch = useDispatch();
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(saveUser(user.refreshToken));
			} else {
				dispatch(saveUser(undefined));
			}
		});
	}, [auth, dispatch]);

	return (
		<>
			<Navigation />

			<div id="App">
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>

					<Route path="/van">
						<VanPage />
					</Route>

					<Route path="/campervan">
						<CampervanPage />
					</Route>

					<Route path="/jaktvagn">
						<JaktvagnPage />
					</Route>

					<Route path="/login">
						<LoginPage />
					</Route>

					<Route>
						<PageNotFound />
					</Route>
				</Switch>
			</div>
		</>
	);
}

export default App;
