import {Router} from "express";
import {getPlantsByCommonNameController} from "../controllers/plant.controller";

const plantsByCommonNameRouter = Router ();

plantsByCommonNameRouter.route("/")
    .get(getPlantsByCommonNameController)

export default plantsByCommonNameRouter;