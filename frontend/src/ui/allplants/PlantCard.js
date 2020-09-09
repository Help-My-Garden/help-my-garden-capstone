import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { httpConfig } from '../../shared/utils/http-config'
import {getAllPlants} from "../../store/plants";
import { Container, Jumbotron } from 'react-bootstrap'
// import { Card } from 'react-bootstrap'
// import {CardBody} from 'reactstrap'

export const PlantCard = ({ plant }) => {

	const dispatch = useDispatch()

	const clickAddToList = () => {
		httpConfig.post("/apis/plant-profile/", {plantProfilePlantId: plant.plantId})
			.then(reply => {
					let {message, type} = reply
					if(reply.status === 200) {
						console.log(reply)
						dispatch(getAllPlants())
					}
					console.log(reply)
				}
			);
	}


	return (
		<>

			<div className="col-md-6">
				<Jumbotron style={{
					backgroundColor: "rgb(92,115,66)",
				}}>
					<Container>
						<a href ={`/plant/${plant.plantId}`} >
						<div className="row" style={{
							border:"solid 2px black",
						}}>



								<div className = "col-md-5.5" >

									<p style = {{
										color: "blue",
										backgroundColor: "white",
										borderRadius: "20px",
										padding: ".3rem",
										textAlign: "center",
										justifyContent: "center",
									}} >
										{plant.plantCommonName}</p >
									<img src = {plant.plantImageUrl} alt = "trefle database plant image" style = {{
										width: "200px",
										justifyContent: "flex-end",
									}} />

								</div >

							<div className = "col-md={{ span: 4, offset: 1.5 }}" style={{
								alignItems: "flex-end",
							}}>

								<div className = "row" style = {{
									backgroundColor: "white",
									textDecoration: "underline",
									borderRadius: "20px",
									padding: "1rem",
									marginLeft: ".5rem",

								}} >
									<ul>
										<li>{plant.plantFamilyName}</li>
										<li>{plant.plantScientificName}</li>
										<li>{plant.plantColor}</li>
										<li>{plant.plantDuration}</li>
										<li>{plant.plantSunlight}</li>
										<li>{plant.plantSize}</li>
									</ul>
								</div >
								<div className = "row" style = {{
									justifyContent: "center",
								}}>
									<button onClick={clickAddToList} className = "btn btn-success" >Add to List</button >
								</div >
							</div >
						</div>
					</a	>
					</Container>
				</Jumbotron>

			</div>
		</>
	)
}