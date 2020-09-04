import {getPlantsController} from "../controllers/plant.controller";
import {Router} from "express";
import {togglePlantProfileController} from "../controllers/plantProfile.controller";
import {check} from "express-validator";

const plantProfileIdRouter = Router();

/*plantProfileIdRouter.route("/plantProfileId/:plantProfileId")
    .get(getPlantsController)*/

plantProfileIdRouter.route("/")
    .post([check("plantProfilePlantId").isUUID()],togglePlantProfileController)

export default plantProfileIdRouter
