/*import {connect} from "../../src/database";
import {PlantProfile} from "../interfaces/PlantProfile";

export async function togglePlantProfile(plantProfile: PlantProfile) {
    try {
        console.log('save', plantProfile)
        const mysqlConnection = await connect();
        const mySqlSelectQuery = 'SELECT BIN_TO_UUID(plantProfileProfileId) as plantProfileProfileId, BIN_TO_UUID(plantProfilePlantId) as plantProfilePlantId FROM plantProfile WHERE plantProfileProfileId = UUID_TO_BIN(:plantProfileProfileId) AND plantProfilePlantId = UUID_TO_BIN(:plantProfilePlantId)'

        const [SaveRows] = await mysqlConnection.execute(mySqlSelectQuery, plantProfile)
        // @ts-ignore
        console.log('saveRows', saveRows)
        // @ts-ignore
        if (saveRows[0]){

            const mySqlConnection = await connect()
            const mySqlDelete = 'DELETE FROM `like` WHERE likeProfileId = UUID_TO_BIN(:likeProfileId) AND likeTweetId = UUID_TO_BIN(:likeTweetId)'
            const [deleteRows] = await mySqlConnection.execute(mySqlDelete, plantProfile)
            console.log('PLANT REMOVED')



        }else{

            const mySqlConnection = await connect()
            const mySqlQuery = "INSERT INTO `like`(likeProfileId, likeTweetId, likeDate) VALUES(UUID_TO_BIN(:likeProfileId), UUID_TO_BIN(:likeTweetId), NOW())";

            const [rows] = await mySqlConnection.execute(mySqlQuery, plantProfile)
            console.log('PLANT ADDED')

        }


        return "Save toggled successfully"
    } catch (error) {
        console.log(error)
    }
}*/
