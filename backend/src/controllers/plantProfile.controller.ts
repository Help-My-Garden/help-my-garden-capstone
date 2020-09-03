import {Request, Response} from 'express';

// DB

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)
import {Status} from '../../utils/interfaces/Status';
import {Profile} from "../../utils/interfaces/Profile";
import {Plant} from "../../utils/interfaces/Plant";

const {validationResult} = require('express-validator');

export async function togglePlantProfileController(request: Request, response: Response) {

    try {
        validationResult(request).throw();

        const {plantProfilePlantId} = request.body;
        const profile: Profile = request.session?.profile
        const plantProfileProfileId = <string>profile.profileId

        const plant: Plant = {
            plantProfileProfileId,
            plantProfilePlantId,
        }
        const select = await selectPlant(plant)
        // @ts-ignore
        if (select[0]){
            const result = await deletePlant(plant)
        }else{
            const result = await insertPlant(plant)
        }

        const status: Status = {
            status: 200,
            message: 'Like successfully updated',
            data: null
        };
        return response.json(status);

    } catch(error) {
        console.log(error);
    }
}
