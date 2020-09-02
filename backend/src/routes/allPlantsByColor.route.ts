import {Router} from "express";
import {getPlantsByColorController} from "../controllers/plant.controller";

const plantsByColorRouter = Router();

plantsByColorRouter.route("/")
    .get(getPlantsByColorController)

export default plantsByColorRouter;