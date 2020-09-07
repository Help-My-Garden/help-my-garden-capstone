import image from '../sharedimg/600x400.jpg'
import Carousel from 'react-bootstrap/cjs/Carousel'
import React from 'react'
export function PlantCarousel (props) {
  const{plant}=props
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
