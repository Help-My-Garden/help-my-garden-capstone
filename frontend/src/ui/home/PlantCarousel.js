import Carousel from 'react-bootstrap/cjs/Carousel'
import React from 'react'
export function PlantCarousel (props) {
  const{plant}=props
  console.log(plant)
  return (
    <>
      <Carousel.Item>
        <img
          className="img-fluid"
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
