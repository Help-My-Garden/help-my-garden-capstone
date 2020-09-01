import {Router} from "express";
import {getPlantsController} from "../controllers/plant.controller";

export const PlantRoute = Router();

/*add plant info route for inner join*/

PlantRoute.route('/')
    .get(getPlantsController);
