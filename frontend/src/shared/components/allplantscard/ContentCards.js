import React from "react";
import { useSelector } from 'react-redux'
import { PlantListComponent } from '../../../pages/allplants/PlantListItem'

export const PlantCard = ({ plants }) => {

	const plants = useSelector((state) => state.plants ? state.plants : null)

	const FindPlants = () => {
		const plants = plants.find(plants => plants.plantId === plants.plantId)

	}

	return (
		<>
			<div className = "row" >
				<div className = "col-md-6" >
					<div className = "row" >
						<a href = "/plant" >
							<div className = "col-md-6" >

								<p style = {{
									color: "blue",
									textDecoration: "underline",
								}} >
									{plants.plantCommonName}</p >
								<img src = {plants.plantImageUrl} alt = "trefle database plant image" style = {{
									width: "250px",
								}} />

							</div >
						</a >
						<div className = "col-md-6" >
							<div className = "row" style = {{
								backgroundColor: "white",
								borderRadius: "20px",
								padding: "1rem",
							}} >
								<PlantListComponent />
							</div >
							<div className = "row" >
								<button className = "btn btn-primary" >Add to List</button >
							</div >
						</div >
					</div >
				</div >
			</div >
		</>
	)
}