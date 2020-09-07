import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { httpConfig } from '../../shared/utils/http-config'

export const PlantCard = ({ plant }) => {

	const dispatch = useDispatch()

	const clickAddToList = () => {
		httpConfig.post("/apis/plant-profile/", {plantProfilePlantId: plant.plantId})
			.then(reply => {
					let {message, type} = reply
					if(reply.status === 200) {
						console.log(reply)
						// dispatch(getAllPlants())
					}
					console.log(reply)
				}
			);
	}


	return (
		<>
			<div className = "row" >
				<div className = "col-md-6" >
					<div className = "row" >
						<a href ={`/plant/${plant.plantId}`} >
							<div className = "col-md-6" >

								<p style = {{
									color: "#1D451E",

									backgroundColor: "white",
									borderRadius: "20px",
									padding: ".5rem",
									textAlign: "center",
								}} >
									{plant.plantCommonName}</p >
								<img src = {plant.plantImageUrl} alt = "trefle database plant image" style = {{
									width: "250px",
								}} />

							</div >
						</a >
						<div className = "col-md-6" >
							<div className = "row" style = {{
								backgroundColor: "white",
								textDecoration: "underline",
								borderRadius: "20px",
								padding: "1rem",
								flexDirection: "row",
							}} >
								<p>{plant.plantFamilyName}</p >
								<p>{plant.plantScientificName}</p >
								<p>{plant.plantColor}</p >
								<p>{plant.plantDuration}</p >
								<p>{plant.plantSunlight}</p >
								<p>{plant.plantSize}</p >
							</div >
							<div className = "row" >
								<button onClick={clickAddToList} className = "btn btn-success" >Add to List</button >
							</div >
						</div >
					</div >
				</div >
			</div >
		</>
	)
}