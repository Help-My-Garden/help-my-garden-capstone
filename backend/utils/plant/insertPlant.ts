import {Plant} from "../interfaces/Plant"
import {connect} from "../../src/database";


export async function insertPlant (plant: Plant) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO plant (plantId, plantFamilyName, plantCommonName, plantScientificName, plantImageUrl) VALUES (UUID_TO_BIN(UUID()), :plantFamilyName, :plantCommonName, :plantScientificName, :plantImageUrl)";

        const [rows] = await mySqlConnection.execute(mySqlQuery, plant)
        return "Plant successfully inserted"
    } catch (error) {
        console.log(error)
    }
}