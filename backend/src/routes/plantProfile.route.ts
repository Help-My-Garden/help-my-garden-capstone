import {getPlantsController} from "../controllers/plant.controller";
import PlantRouter from "./allPlants.route";

PlantRouter.route("/plantProfileId/:plantProfileId").get(getPlantsController)
