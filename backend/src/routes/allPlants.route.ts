import {Router} from "express";
import {getPlantsController} from "../controllers/plant.controller";

const AllPlantsRouter = Router();

/*add plant info route for inner join*/
AllPlantsRouter.route("/plantProfileId/:plantProfileId").get(getPlantsController)

AllPlantsRouter.route('/')
    .get(getPlantsController)

export default AllPlantsRouter;
