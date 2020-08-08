import React from "react";
import Jumbotron from "react-bootstrap/cjs/Jumbotron";

export const JumbotronInfo = () => {
  return (
    <>
      <Jumbotron>
        <h1>plant name</h1>
        <ul>
          <li>State:</li>
          <li>Family Name:</li>
          <li>Common Name:</li>
          <li>Scientific Name:</li>
          <li>Color:</li>
          <li>Duration:</li>
          <li>Light Preference:</li>
          <li>Size:</li>
        </ul>
      </Jumbotron>
    </>
  )
}