import {connect} from "../../src/database";
import {PlantProfile} from "../interfaces/PlantProfile";

export async function insertPlantProfile(plantProfile: PlantProfile) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO plantProfile(plantProfileProfileId, plantProfilePlantId) VALUES(UUID_TO_BIN(:plantProfileProfileId), UUID_TO_BIN(:plantProfilePlantId))";
        const [rows] = await mySqlConnection.execute(mySqlQuery, plantProfile)
        return "Plant successfully inserted"
    } catch(error) {
        console.log(error)
    }
}
