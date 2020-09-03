import {connect} from "../../src/database";
import {Plant} from "../interfaces/Plant";

export async function insertPlant(plant: Plant) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO plantProfile(plantProfileProfileId, plantProfilePlantId) VALUES(UUID_TO_BIN(:plantProfileProfileId), UUID_TO_BIN(:plantProfilePlantId))";
        const [rows] = await mySqlConnection.execute(mySqlQuery, plant)
        return "Plant successfully inserted"
    } catch(error) {
        console.log(error)
    }
}
