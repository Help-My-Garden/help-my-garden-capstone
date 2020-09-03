import {Router} from "express";
import {getPlantsByIdController} from "../controllers/plant.controller";

const plantsByIdRouter = Router();

plantsByIdRouter.route("/:plantId")
    .get(getPlantsByIdController)

export default plantsByIdRouter;