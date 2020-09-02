import {Router} from "express";
import {getPlantsController} from "../controllers/plant.controller";

export const PlantRouter = Router();

/*add plant info route for inner join*/
PlantRouter.route("/plantProfileId/:plantProfileId").get(getPlantsController)

PlantRouter.route('/')
    .get(getPlantsController)

export default PlantRouter;
