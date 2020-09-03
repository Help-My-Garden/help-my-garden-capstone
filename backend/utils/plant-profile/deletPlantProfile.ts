import {connect} from "../../src/database";
import {Plant} from "../interfaces/Plant";

export async function deletePlant(plant: Plant) {
    try {
        const mySqlConnection = await connect()
        const mySqlDelete = 'DELETE FROM plantProfile WHERE plantProfileProfileId = UUID_TO_BIN(:plantProfileProfileId) AND plantProfilrPlantId = UUID_TO_BIN(:plantProfilePlantId)'
        const [rows] = await mySqlConnection.execute(mySqlDelete, plant)
        return "Plant successfully deleted"
    } catch(error) {
        console.log(error)
    }
}