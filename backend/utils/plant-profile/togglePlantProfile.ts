import {connect} from "../../src/database";
import {Plant} from "../interfaces/Plant";

export async function togglePlantProfile(plant: Plant) {
    try {
        console.log('save', plant)
        const mysqlConnection = await connect();
        const mySqlSelectQuery = 'SELECT BIN_TO_UUID(plantProfileProfileId) as plantProfileProfileId, BIN_TO_UUID(plantProfilePlantId) as plantProfilePlantId FROM plantProfile WHERE plantProfileProfileId = UUID_TO_BIN(:plantProfileProfileId) AND plantProfilePlantId = UUID_TO_BIN(:plantProfilePlantId)'
        // const mySqlSelectQuery = 'SELECT EXISTS (SELECT * FROM `like` WHERE likeProfileId = UUID_TO_BIN(:likeProfileId) AND likeTweetId = UUID_TO_BIN(:likeTweetId))'
        // const mySqlSelectQuery = 'SELECT COUNT(*) FROM `like` WHERE likeProfileId = UUID_TO_BIN(:likeProfileId) AND likeTweetId = UUID_TO_BIN(:likeTweetId))'

        const [SaveRows] = await mysqlConnection.execute(mySqlSelectQuery, plant)
        // @ts-ignore
        console.log('saveRows', saveRows)
        // @ts-ignore
        if (saveRows[0]){

            const mySqlConnection = await connect()
            const mySqlDelete = 'DELETE FROM `like` WHERE likeProfileId = UUID_TO_BIN(:likeProfileId) AND likeTweetId = UUID_TO_BIN(:likeTweetId)'
            const [deleteRows] = await mySqlConnection.execute(mySqlDelete, plant)
            console.log('PLANT REMOVED')



        }else{

            const mySqlConnection = await connect()
            const mySqlQuery = "INSERT INTO `like`(likeProfileId, likeTweetId, likeDate) VALUES(UUID_TO_BIN(:likeProfileId), UUID_TO_BIN(:likeTweetId), NOW())";

            const [rows] = await mySqlConnection.execute(mySqlQuery, plant)
            console.log('PLANT ADDED')

        }


        return "Save toggled successfully"
    } catch (error) {
        console.log(error)
    }
}