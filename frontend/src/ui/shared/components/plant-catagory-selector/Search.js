import React from "react";
import Button from "react-bootstrap/cjs/Button";

export function SearchCom () {

	return (
		<>
			<section className="container-md" style={{
				backgroundColor: "#efefef",
				margin: "2rem auto 2rem auto",
				padding: "1rem",
				borderRadius: "5px",
			}}>
				<div className="row p-2">
					<div className = "information col-md-2" >
						<label className = "form-label" >Plant Family
							<input className = "form-control col-md-12" type = "text" name = "plantFamily" id = "plantFamily"
										 placeholder = "Plant Family" />
						</label >
					</div >
					<div className = "information col-md-2" >
						<label className = "form-label" >Plant Name
							<input className = "form-control col-md-12" type = "text" name = "plantName" id = "plantName"
										 placeholder = "Plant Name" />
						</label >
					</div >
					<div className = "information col-md-2" >
						<label className = "form-label" >Duration
							<input className = "form-control col-md-12" type = "text" name = "duration" id = "duration"
										 placeholder = "Duration" />
						</label >
					</div >
					<div className = "information col-md-2" >
						<label className = "form-label" >Color
							<input className = "form-control col-md-12" type = "text" name = "color" id = "color"
										 placeholder = "Color" />
						</label >
					</div >
				</div>
				<div className="row">
					<div className="col-md-2">
						<Button>Search</Button>
					</div>
				</div>
			</section>
		</>
	)

}