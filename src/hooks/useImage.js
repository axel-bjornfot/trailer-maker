import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { collection, query, where } from "firebase/firestore";
import { db } from "../firebase";

const useImage = (params = {}) => {
	const imagesRef = collection(db, params.typeOfVan);

	const queryRef = params.typeOfVan;
	query(
		imagesRef,
		where("color", "==", params.color),
		where("type", "array-contains", params.standard)
	);

	const imgQuery = useFirestoreQueryData(queryRef, {});

	console.log("imgQuery: ", imgQuery);
	return imgQuery;
};

export default useImage;
