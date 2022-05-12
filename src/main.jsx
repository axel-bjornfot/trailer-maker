import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./App.scss";
import { QueryClient, QueryClientProvider } from "react-query";

import { Provider } from "react-redux";
import { store } from "./app/store";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: 1000 * 60 * 1,
			cacheTime: 1000 * 60 * 60 * 2,
		},
	},
});

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
