import React from 'react';
import {Route} from 'react-router';

const UserListComponent = (props) => {
  const {user} = props;

  // This component takes advantage of the render prop pattern https://css-tricks.com/an-overview-of-render-props-in-react/.
  return (
    <>
      {/*the Route component wraps around the UserListComponent to give it access to the history prop inside of Route*/}
      <Route render={({history}) => (
        <tr
          onClick={() => {
            history.push(`user/${plants.plantId}`)
          }}>
          <td>{plant.plantFamilyName}</td>
          <td>{plant.plantCommonName}</td>
          <td>{plant.plantScientificName}</td>
          <td>{plant.plantColor}</td>
          <td>{plant.plantImageUrl}</td>
          <td>{plant.plantDuration}</td>
          <td>{plant.plantSunlight}</td>
          <td>{plant.plantSize}</td>
        </tr>
      )}
      />
    </>
  )
};

export const PlantListItem = (PlantListComponent);