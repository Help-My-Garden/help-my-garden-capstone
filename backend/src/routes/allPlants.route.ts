import {Router} from "express";
import {getPlantsController} from "../controllers/plant.controller";

const AllPlantsRouter = Router();

AllPlantsRouter.route('/')
    .get(getPlantsController)

export default AllPlantsRouter;
