import ClipLoader from "react-spinners/ClipLoader";

const LoadingSpinner = () => {
	return (
		<div className="d-flex justify-content-center align-items-center">
			<ClipLoader size={50} color="#000000" />
		</div>
	);
};

export default LoadingSpinner;