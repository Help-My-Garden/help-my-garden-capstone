import React from "react";
import {httpConfig} from "../../shared/utils/http-config";
import {removePlantByPlantId} from "../../store/plants";
import {useDispatch} from "react-redux";

export function MyListCard ({plant}) {

	const dispatch = useDispatch();

	const clickDeletePlant = () => {
		httpConfig.post("/apis/plant-profile/", {plantProfilePlantId: plant.plantId})
			.then(reply => {
					let {message, type} = reply
					if(reply.status === 200) {
						console.log(reply)
						dispatch(removePlantByPlantId({plantId: plant.plantId}))
					}
					console.log(reply)
				}
			);
	}

	return(
		<>
			<div className = "col-md-2" style={{border:"solid 2px black"}} >
				<a href = {`/plant/${plant.plantId}`} >
					<p style = {{
						color: "blue",
						textDecoration: "underline",
					}} >Scientific Name: {plant.plantScientificName}</p >
					<img className="img-fluid" src = {plant.plantImageUrl} alt = {plant.plantScientificName} style = {{
						width: "250px",
					}} />
				</a >
				<button onClick={clickDeletePlant} className="btn btn-primary">Remove</button>
			</div>
	</>
	)
}