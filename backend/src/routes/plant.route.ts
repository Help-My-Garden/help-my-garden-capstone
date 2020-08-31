import {Router} from "express";
import {getPlantsController} from "../controllers/plant.controller";

export const PlantRoute = Router();

PlantRoute.route('/')
    .get(getPlantsController);
