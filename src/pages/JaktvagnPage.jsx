import React from "react";
import Card from "react-bootstrap/Card";
import ProductImg from "../components/ProductImg";
import { collection, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { useFirestoreQueryData } from "@react-query-firebase/firestore";

const JaktvagnPage = () => {
	const qRef = query(collection(db, "jaktvagn"));
	const { isLoading, data } = useFirestoreQueryData(["jaktvagn"], qRef, {
		subscribe: true,
	});

	return (
		<>
			<Card>
				<ProductImg data={data} isLoading={isLoading} />
			</Card>
		</>
	);
};

export default JaktvagnPage;
