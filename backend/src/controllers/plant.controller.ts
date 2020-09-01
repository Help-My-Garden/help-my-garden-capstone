import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectAllPlants} from "../../utils/plant/selectAllPlants";
import {selectAllPlantsByColor} from "../../utils/plant/selectAllPlantsByColor";
import {selectAllPlantsByDuration} from "../../utils/plant/selectAllPlantsByDuration";
import {selectAllPlantsByCommonName} from "../../utils/plant/selectAllPlantsByCommonName";

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

try {
    const data = await selectAllPlantsByColor()
    // return the response
    const status: Status = {status: 200, message: null, data};
    return response.json(status);
} catch(error) {
    console.log(error);
}

try {
    const data = await selectAllPlantsByCommonName()
    // return the response
    const status: Status = {status: 200, message: null, data};
    return response.json(status);
} catch(error) {
    console.log(error);
}

try {
    const data = await selectAllPlantsByDuration()
    // return the response
    const status: Status = {status: 200, message: null, data};
    return response.json(status);
} catch(error) {
    console.log(error);
}

try {
    const data = await selectAllPlantsByFamilyName()
    // return the response
    const status: Status = {status: 200, message: null, data};
    return response.json(status);
} catch(error) {
    console.log(error);
}


try {
    const data = await selectAllPlantsById()
    // return the response
    const status: Status = {status: 200, message: null, data};
    return response.json(status);
} catch(error) {
    console.log(error);
}

