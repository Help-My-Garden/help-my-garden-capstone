import {Plant} from "../interfaces/Plant"
import {connect} from "../../src/database";


export async function insertPlant (plant : Plant) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO plant (plantId, plantColor , plantCommonName, plantDuration, plantFamilyName, plantImageUrl, plantScientificName, plantSize, plantSunlight) VALUES (UUID_TO_BIN(UUID()), :plantColor, :plantCommonName, :plantDuration, :plantFamilyName, :plantImageUrl, :plantScientificName, :plantSize, :plantSunlight)";

        const [rows] = await mySqlConnection.execute(mySqlQuery, plant)
        return "Plant successfully inserted"
    } catch (error) {
        console.log(error)
        return null
    }
}