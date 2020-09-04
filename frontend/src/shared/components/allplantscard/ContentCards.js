import React from "react";
import { useSelector } from 'react-redux'



export const plantCard = ({ post }) => {

	const users = useSelector((state) => state.users ? state.users : null)

	const FindPlants = () => {
		const profile = profile.find(profile => post.plantProfilePlantId === profile.profileId)
		return (
			<>
				{profile && <h3>{profile.username}</h3>}
			</>
		)
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
									Rose</p >

							</div >
						</a >
						<div className = "col-md-6" >
							<div className = "row" style = {{
								backgroundColor: "white",
								borderRadius: "20px",
								padding: "1rem",
							}} >
								<p >Happy little ipsum. Be sure to use odorless paint-thinner. If it's not odorless, you'll find
										yourself working alone very, very quick.</p >
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