import React from "react";
import Button from "react-bootstrap/cjs/Button";

export const SearchCom = () => {

	return (
		<>
			<section className="container bg-dark">
				<div className="row">
					<div className = "information col-2" >
						<label className = "form-label" >State
							<input className = "form-control col-md-12" type = "text" name = "State" id = "State"
										 placeholder = "State" />
						</label >
					</div >
					<div className = "information col-2" >
						<label className = "form-label" >Plant Family
							<input className = "form-control col-md-12" type = "text" name = "plantFamily" id = "plantFamily"
										 placeholder = "Plant Family" />
						</label >
					</div >
					<div className = "information col-2" >
						<label className = "form-label" >Plant Name
							<input className = "form-control col-md-12" type = "text" name = "plantName" id = "plantName"
										 placeholder = "Plant Name" />
						</label >
					</div >
					<div className = "information col-2" >
						<label className = "form-label" >Duration
							<input className = "form-control col-md-12" type = "text" name = "duration" id = "duration"
										 placeholder = "Duration" />
						</label >
					</div >
					<div className = "information col-2" >
						<label className = "form-label" >Color
							<input className = "form-control col-md-12" type = "text" name = "color" id = "color"
										 placeholder = "Color" />
						</label >
					</div >
					<div className="col-12"></div>
						<Button>Search</Button>
					</div>
			</section>
		</>
	)

}