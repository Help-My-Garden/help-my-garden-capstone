import {connect} from "../../src/database";

export async function selectAllPlantsByColor(plantColor: string) {
    try {
        const mysqlConnection = await connect();

        const [rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(plantId) as plantId, plantColor, plantCommonName, plantDuration, plantFamilyName, plantImageUrl, plantScientificName, plantSize, plantSunlight FROM plant WHERE plantColor LIKE :plantColor ORDER BY plantColor asc LIMIT 200', {plantColor:
                `%${plantColor}%`});
        // @ts-ignore is required so that rows can be interacted with like the array it is
        return rows

    } catch (e) {
        console.error(e)
        return undefined
    }
}