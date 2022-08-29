import React from "react";
import { useParams } from "react-router-dom";
import useActor from "../hooks/useActor";
import ActorInfo from "../components/ActorInfo"
import LoadingSpinner from "../components/LoadingSpinner";

const ActorPage = () => {
	const { id } = useParams();
	const { data: actor, isLoading } = useActor(id);

	return (
		<>
			{isLoading && <LoadingSpinner />}
			{actor && <ActorInfo actor={actor} />}
		</>
	);
};

export default ActorPage;