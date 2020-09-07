import {connect} from "../../src/database";

export async function selectTenRandomPlants() {
    try {
        const mysqlConnection = await connect();

        const [rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(plantId) as plantId, plantColor, plantCommonName, plantFamilyName, plantImageUrl FROM plant WHERE plantImageUrl IS NOT null ORDER BY RAND() LIMIT 10')
        return rows
    } catch (e) {
        console.error(e)
        return undefined
    }
}
