import {connect} from "../../src/database";

export async function selectAllPlantsByPlantProfileId(plantProfileProfileId: string) {
    console.log(plantProfileProfileId, "I'm the mysql enabled function");
    const mySqlConnection = await connect();
    const mySqlQuery = 'SELECT BIN_TO_UUID(plantId) AS plantId, plantColor, plantCommonName, plantDuration, plantFamilyName, plantImageUrl, plantScientificName, plantSize, plantSunlight FROM plant INNER JOIN plantProfile ON plant.plantId = plantProfile.plantProfilePlantId WHERE plantProfile.plantProfileProfileId = UUID_TO_BIN(:plantProfileProfileId) LIMIT 0, 25'
    const [rows] = await mySqlConnection.execute(mySqlQuery, {plantProfileProfileId})
    return rows;
}