import {Router} from "express";
import {getPlantsByFamilyNameController} from "../controllers/plant.controller";

const plantsByFamilyNameRouter = Router();

plantsByFamilyNameRouter.route("/")
    .get(getPlantsByFamilyNameController)

export default plantsByFamilyNameRouter;