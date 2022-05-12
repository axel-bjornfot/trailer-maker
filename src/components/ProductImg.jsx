import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import Image from "react-bootstrap/Image";

const ProductImg = ({ isLoading, data }) => {
	return (
		<>
			{isLoading && <ScaleLoader></ScaleLoader>}
			{!isLoading &&
				data.map((img, idx) => <Image key={idx} src={img.url}></Image>)}
		</>
	);
};

export default ProductImg;
