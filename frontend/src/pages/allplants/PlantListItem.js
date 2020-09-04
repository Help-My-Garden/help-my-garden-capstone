import React from 'react';
import {Route} from 'react-router';

export const PlantListComponent = (props) => {
  const {plants} = props;

  // This component takes advantage of the render prop pattern https://css-tricks.com/an-overview-of-render-props-in-react/.
  return (
    <>
      {/*the Route component wraps around the UserListComponent to give it access to the history prop inside of Route*/}
      <Route render={({history}) => (
        <tr
          onClick={() => {
            history.push(`plants/${plants.plantId}`)
          }}>
          <td>{plants.plantFamilyName}</td>
          <td>{plants.plantScientificName}</td>
          <td>{plants.plantColor}</td>
          <td>{plants.plantImageUrl}</td>
          <td>{plants.plantDuration}</td>
          <td>{plants.plantSunlight}</td>
          <td>{plants.plantSize}</td>
        </tr>
      )}
      />
    </>
  )
};

