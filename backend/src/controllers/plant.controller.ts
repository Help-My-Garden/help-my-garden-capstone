import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectAllPlants} from "../../utils/plant/selectAllPlants";

export async function getPlantsController(request: Request, response: Response) {

    try {
        const data = await selectAllPlants()
        // return the response
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch(error) {
        console.log(error);
    }
}

