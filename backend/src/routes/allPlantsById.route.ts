import {Router} from "express";
import {getPlantsByIdController} from "../controllers/plant.controller";

const plantsByIdRouter = Router();

plantsByIdRouter.route("/")
    .get(getPlantsByIdController)

export default plantsByIdRouter;