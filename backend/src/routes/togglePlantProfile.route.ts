import {Router} from "express";
import {togglePlantProfileController} from "../controllers/plantProfile.controller";
import {asyncValidatorController} from "../controllers/asyncValidator.controller";
import {check} from "express-validator";
import {isLoggedIn} from "../controllers/isLoggedIn.controller";

const togglePlantProfileIdRouter = Router();

togglePlantProfileIdRouter.route("/")
    .post(isLoggedIn, asyncValidatorController([check("plantProfilePlantId", "Please provide a valid UUID").isUUID()]), togglePlantProfileController)

export default togglePlantProfileIdRouter
