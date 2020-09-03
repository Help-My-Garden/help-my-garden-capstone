import {Router} from "express";
import {getPlantsByDurationController} from "../controllers/plant.controller";

const plantsByDurationRouter = Router();

plantsByDurationRouter.route("/:plantDuration")
 .get(getPlantsByDurationController)

export default plantsByDurationRouter;