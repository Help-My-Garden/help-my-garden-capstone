import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectAllPlants} from "../../utils/plant/selectAllPlants";
import {selectAllPlantsByColor} from "../../utils/plant/selectAllPlantsByColor";
import {selectAllPlantsByDuration} from "../../utils/plant/selectAllPlantsByDuration";
import {selectAllPlantsByCommonName} from "../../utils/plant/selectAllPlantsByCommonName";
import {selectAllPlantsById} from "../../utils/plant/selectAllPlantsById";
import {selectAllPlantsFamilyName} from "../../utils/plant/selectAllPlantsByFamilyName";
import {selectAllPlantsByScientificName} from "../../utils/plant/selectAllPlantsByScientificName";
import {selectAllPlantsByPlantProfileId} from "../../utils/plant/selectAllPlantsByPlantProfileId";
import {selectTenRandomPlants} from "../../utils/plant/selectTenRandomPlants";

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


export async function getPlantsByFamilyNameController(request: Request, response: Response, nextFunction: NextFunction){
    try {
        const {plantFamilyName} = request.params
        const data = await selectAllPlantsFamilyName(plantFamilyName)
        // return the response
        return response.json({status: 200, message: null, data});
    } catch (error) {
        console.log(error);
    }
}


export async function getPlantsByIdController(request: Request, response: Response, nextFunction: NextFunction){
    try {
        const {plantId} = request.params
        console.log(plantId)
        const data = await selectAllPlantsById(plantId)
        console.log(data)
        // return the response
        return response.json({status: 200, message: null, data});
    } catch (error) {
        console.log(error);
    }
}

export async function getPlantsByScientificNameController(request: Request, response: Response){
    try {
        const {plantScientificName} = request.params
        const data = await selectAllPlantsByScientificName(plantScientificName)
        // return the response
        return response.json({status: 200, message: null, data});
    } catch (error) {
        console.log(error);
    }
}

export async function getPlantsByPlantProfileIdController(request: Request, response: Response){
    try {
        const {plantProfileId} = request.params
        const data = await selectAllPlantsByPlantProfileId(plantProfileId)
        // return the response
        return response.json({status: 200, message: null, data});
    } catch (error) {
        console.log(error);
    }
}

export async function getTenRandomPlantsController(request: Request, response: Response): Promise<Response | void>{

    try {
        const data = await selectTenRandomPlants()
        // return the response
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch (error) {
        console.log(error);
    }
}
