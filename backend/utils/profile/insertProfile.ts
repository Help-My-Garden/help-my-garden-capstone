import {connect} from "../../src/database";
import {Profile} from "../interfaces/profile";

export async function insertProfile(profile: Profile) {
    try {
        const mysqlConnection = await connect();
        const query : string = 'INSERT INTO profile(profileId, profileEmail, profileHash, profileName, profileActivationToken ) VALUES (UUID_TO_BIN(UUID()) , :profileEmail, :profileName, :profileHash, :profileActivationToken)';

        const [rows] = await mysqlConnection.execute(query, profile);
        return 'Profile Successfully Created'
    } catch (e) {
        console.error(e)
        return null
    }
}