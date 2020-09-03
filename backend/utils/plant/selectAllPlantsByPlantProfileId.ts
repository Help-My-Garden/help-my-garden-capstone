import {connect} from "../../src/database";

export async function selectAllPlantsByPlantProfileId(plantProfileProfileId: string) {
    const mySqlConnection = await connect();
    const mySqlQuery = 'SELECT BIN_TO_UUID(plantId) AS plantId, plantColor, plantCommonName, plantDuration, plantFamilyName, plantImageUrl, plantScientificName, plantSize, plantSunlight INNER JOIN plant ON plant.plantId = plantProfile.plantProfilePlantId WHERE plantProfileId = UUID_TO_BIN(:plantProfileId) LIMIT 0, 25'
    const [rows] = await mySqlConnection.execute(mySqlQuery, {plantProfileProfileId})
    return rows;
}