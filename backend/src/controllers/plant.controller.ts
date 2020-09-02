import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectAllPlants} from "../../utils/plant/selectAllPlants";
import {selectAllPlantsByColor} from "../../utils/plant/selectAllPlantsByColor";
import {selectAllPlantsByDuration} from "../../utils/plant/selectAllPlantsByDuration";
import {selectAllPlantsByCommonName} from "../../utils/plant/selectAllPlantsByCommonName";
import {selectAllPlantsById} from "../../utils/plant/selectAllPlantsById";
import {selectAllPlantsFamilyName} from "../../utils/plant/selectAllPlantsByFamilyName";

export async function getPlantsController(request: Request, response: Response): Promise<Response | void>{

    try {
        const data = await selectAllPlants()
        // return the response
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch (error) {
        console.log(error);
    }
}

export async function getPlantsByColorController(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {plantColor} = request.params
        const data = await selectAllPlantsByColor(plantColor)
        // return the response
        return response.json({status: 200, message: null, data});
    } catch (error) {
        console.log(error);
    }
}


export async function getPlantsByCommonNameController(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {plantCommonName} = request.params
        const data = await selectAllPlantsByCommonName(plantCommonName)
        // return the response
        return response.json({status: 200, message: null, data});
    } catch (error) {
        console.log(error);
    }
}


export async function getPlantsByDurationController(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {plantDuration} = request.params
        const data = await selectAllPlantsByDuration(plantDuration)
        // return the response
        return response.json({status: 200, message: null, data});
    } catch (error) {
        console.log(error);
    }
}


export async function getPlantsByFamilyNameController(request: Request, response: Response){
    try {
        const {plantFamilyName} = request.params
        const data = await selectAllPlantsFamilyName(plantFamilyName)
        // return the response
        return response.json({status: 200, message: null, data});
    } catch (error) {
        console.log(error);
    }
}


export async function getPlantsByIdController(request: Request, response: Response){
    try {
        const {plantId} = request.params
        const data = await selectAllPlantsById(plantId)
        // return the response
        return response.json({status: 200, message: null, data});
    } catch (error) {
        console.log(error);
    }
}
