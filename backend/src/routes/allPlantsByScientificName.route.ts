import {Router} from "express";
import {getPlantsByScientificNameController} from "../controllers/plant.controller";

const plantsByScientificNameRouter = Router();

plantsByScientificNameRouter.route("/:plantScientificName")
    .get(getPlantsByScientificNameController)

export default plantsByScientificNameRouter;