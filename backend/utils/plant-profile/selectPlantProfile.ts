import {connect} from "../../src/database";
import {Plant} from "../interfaces/Plant";

export async function selectPlant(plant: Plant) {
    try {
        const mysqlConnection = await connect();
        const mySqlSelectQuery = 'SELECT BIN_TO_UUID(plantProfileProfileId) as plantProfileProfileId, BIN_TO_UUID(plantProfilePlantId) as plantProfilePlantId FROM plantProfile WHERE plantProfileProfileId = UUID_TO_BIN(:plantProfileProfileId) AND plantProfilePlantId = UUID_TO_BIN(:plantProfilePlantId)'
        const [rows] = await mysqlConnection.execute(mySqlSelectQuery, plant)
        return rows;

    } catch(error) {
        console.log(error)
    }
}