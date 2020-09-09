import {connect} from "../../src/database";
import {PlantProfile} from "../interfaces/PlantProfile";

export async function deletePlantProfile(plantProfile: PlantProfile) {
    try {
        const mySqlConnection = await connect()
        const mySqlDelete = 'DELETE FROM plantProfile WHERE plantProfileProfileId = UUID_TO_BIN(:plantProfileProfileId) AND plantProfilePlantId = UUID_TO_BIN(:plantProfilePlantId)'
        const [rows] = await mySqlConnection.execute(mySqlDelete, plantProfile)
        return "Plant successfully deleted"
    } catch(error) {
        console.log(error)
    }
}