
import {connect} from "../../src/database";
import {Profile} from "../interfaces/Profile";

export async function insertProfile(profile: Profile) {
    try {
        const mysqlConnection = await connect();
        const query : string = 'INSERT INTO profile(profileId, profileActivationToken, profileEmail, profileHash, profileName ) VALUES (UUID_TO_BIN(UUID()) , :profileActivationToken, :profileEmail, :profileHash, :profileName)';

        const [rows] = await mysqlConnection.execute(query, profile);
        return 'Congratulations your profile was successfully created'
    } catch (e) {
        console.error(e)
        return null
    }
}