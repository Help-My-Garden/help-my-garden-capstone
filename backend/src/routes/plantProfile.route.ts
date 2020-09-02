import {getPlantsController} from "../controllers/plant.controller";
import {Router} from "express";

const plantProfileIdRouter = Router();

plantProfileIdRouter.route("/plantProfileId/:plantProfileId")
    .get(getPlantsController)

export default plantProfileIdRouter
