import {Request, Response} from 'express';

// DB

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)
import {Status} from '../../utils/interfaces/Status';
import {Profile} from "../../utils/interfaces/Profile";
import {PlantProfile} from "../../utils/interfaces/PlantProfile";
import {deletePlantProfile} from "../../utils/plant-profile/deletPlantProfile";
import {insertPlantProfile} from "../../utils/plant-profile/insertPlantProfile";
import {selectPlantProfile} from "../../utils/plant-profile/selectPlantProfile";

const {validationResult} = require('express-validator');

export async function togglePlantProfileController(request: Request, response: Response) {

    try {

        const {plantProfilePlantId} = request.body;
        const profile: Profile = request.session?.profile
        const plantProfileProfileId = <string>profile.profileId

        const plantProfile: PlantProfile = {
            plantProfileProfileId,
            plantProfilePlantId,
        }
        const select = await selectPlantProfile(plantProfile)
        let message = "An error occurred"
        // @ts-ignore
        if (select[0]){
            message = <string> await deletePlantProfile(plantProfile)
        }else{
            message = <string> await insertPlantProfile(plantProfile)
        }

        const status: Status = {
            status: 200,
            message: 'Plant successfully updated',
            data: null
        };
        return response.json(status);

    } catch(error) {
        console.log(error);
    }
}
