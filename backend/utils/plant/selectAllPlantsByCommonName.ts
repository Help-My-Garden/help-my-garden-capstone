import {connect} from "../../src/database";

export async function selectAllPlantsByCommonName(plantCommonName: string) {
    try {
        const mysqlConnection = await connect();
        console.log("bubub")
        const [rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(plantId) as plantId, plantColor, plantCommonName, plantDuration, plantFamilyName, plantImageUrl, plantScientificName, plantSize, plantSunlight FROM plant WHERE plantCommonName LIKE :plantCommonName  ORDER BY plantCommonName asc LIMIT 200', {plantCommonName: `%${plantCommonName}%`});
        // @ts-ignore is required so that rows can be interacted with like the array it is
        return rows

    } catch (e) {
        console.error(e)
        return undefined
    }
}