import {Router} from "express";
import {
    getPlantsByColorController,
    getPlantsByCommonNameController,
    getPlantsByDurationController,
    getPlantsByFamilyNameController,
    getPlantsByIdController, getPlantsByPlantProfileIdController, getPlantsByScientificNameController,
    getPlantsController, getTenRandomPlantsController
} from "../controllers/plant.controller";
import {asyncValidatorController} from "../controllers/asyncValidator.controller";
import {check} from "express-validator";
import {isLoggedIn} from "../controllers/isLoggedIn.controller";

const allPlantsRouter = Router();

allPlantsRouter.route('/page/:page').get(getPlantsController)

allPlantsRouter.route('/plant-profile').get(isLoggedIn, getPlantsByPlantProfileIdController)

allPlantsRouter.route('/:plantId').get(asyncValidatorController([check("plantId", "please provide plant id").isUUID()]), getPlantsByIdController)

allPlantsRouter.route('/ten-plants/random').get(getTenRandomPlantsController)

allPlantsRouter.route('/plant-color/:plantColor').get(asyncValidatorController([check("plantColor", "please provide plant color").isString().notEmpty().trim().escape()]), getPlantsByColorController)

allPlantsRouter.route('/plant-common-name/:plantCommonName').get(asyncValidatorController([check("plantCommonName", "please provide plant common name").isString().notEmpty().trim().escape()]), getPlantsByCommonNameController)

allPlantsRouter.route('/plant-duration/:plantDuration').get(asyncValidatorController([check("plantDuration", "please provide plant duration").isString().notEmpty().trim().escape()]), getPlantsByDurationController)

allPlantsRouter.route('/plant-family-name/:plantFamilyName').get(asyncValidatorController([check("plantFamilyName", "please provide plant family name").isString().notEmpty().trim().escape()]), getPlantsByFamilyNameController)

allPlantsRouter.route('/plant-scientific-name/:plantScientificName').get(asyncValidatorController([check("plantScientificName", "please provide plant scientific name").isString().notEmpty().trim().escape()]), getPlantsByScientificNameController)


export default allPlantsRouter;
