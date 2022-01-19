import React from "react";
import { Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import Container from "react-bootstrap/esm/Container";
import HomePage from "./pages/HomePage";
import Navigation from "./pages/partials/navigation";
import HastlastbilPage from "./pages/HastlastbilPage";
import HasttransportPage from "./pages/HasttransportPage";
import JaktvagnPage from "./pages/JaktvagnPage";

function App() {
	return (
		<>
			<Navigation />
			<Container className="py-4 align-items-center">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/hastlastbil" element={<HastlastbilPage />} />
					<Route
						path="/hasttransport"
						element={<HasttransportPage />}
					/>
					<Route path="/jaktvagn" element={<JaktvagnPage />} />
				</Routes>

				<ReactQueryDevtools
					initialIsOpen={false}
					position="bottom-right"
				/>
			</Container>
		</>
	);
}

export default App;
