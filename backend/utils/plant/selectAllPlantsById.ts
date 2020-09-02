import {connect} from "../../src/database";

export async function selectAllPlantsById(plantId: string) {
    try {
        const mysqlConnection = await connect();

        const [rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(plantId) as plantId, plantColor, plantCommonName, plantDuration, plantFamilyName, plantImageUrl, plantScientificName, plantSize, plantSunlight FROM plant  WHERE plantId = :plantId', {plantId});
        console.log(rows)
        // @ts-ignore is required so that rows can be interacted with like the array it is
        return rows.length !== 0 ? {...rows[0]} : undefined;

    } catch (e) {
        console.error(e)
        return undefined
    }
}