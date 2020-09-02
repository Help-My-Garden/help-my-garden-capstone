import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectAllPlantsByPlantProfileId} from "../../utils/plant/selectAllPlantsByPlantProfileId";

export async function selectPlantsByPlantProfileId(request: Request, response: Response): Promise<Response | void> {


    try {

        const profileId : string = <string> request.session?.profile ?? "No user signed in";

        const data = await selectAllPlantsByPlantProfileId(profileId)
        // return the response
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch(error) {
        console.log(error);
    }
}