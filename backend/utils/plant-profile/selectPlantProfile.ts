import {connect} from "../../src/database";
import {PlantProfile} from "../interfaces/PlantProfile";

export async function selectPlantProfile(plantProfile: PlantProfile) {
    try {
        const mysqlConnection = await connect();
        const mySqlSelectQuery = 'SELECT BIN_TO_UUID(plantProfileProfileId) as plantProfileProfileId, BIN_TO_UUID(plantProfilePlantId) as plantProfilePlantId FROM plantProfile WHERE plantProfileProfileId = UUID_TO_BIN(:plantProfileProfileId) AND plantProfilePlantId = UUID_TO_BIN(:plantProfilePlantId)'
        const [rows] = await mysqlConnection.execute(mySqlSelectQuery, plantProfile)
        return rows;

    } catch(error) {
        console.log(error)
    }
}