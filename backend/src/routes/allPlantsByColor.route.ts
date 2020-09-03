import {Router} from "express";
import {getPlantsByColorController} from "../controllers/plant.controller";

const plantsByColorRouter = Router();

plantsByColorRouter.route("/:plantColor")
    .get(getPlantsByColorController)

export default plantsByColorRouter;