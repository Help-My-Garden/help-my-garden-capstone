import React from 'react'
import Carousel from "react-bootstrap/Carousel";

export function PlantCarousel (props) {
  const{plant}=props
  console.log("is this thing on")
  return (
    <>
      <Carousel.Item style={{ width: "300px", height: "300px", zIndex: "999999999999",}}>
        <img
          className="img-fluid d-block w-100 h-100"
          src={plant.plantImageUrl}
          alt={plant.plantCommonName}
        />
        <Carousel.Caption>
          {plant.plantScientificName}
          {plant.plantSize}
        </Carousel.Caption>
      </Carousel.Item>
    </>
  )
}
