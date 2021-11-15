import { Router} from "express";
import CredorController from "../controllers/CredorController";

const credorRouter = Router();
const credorController = new CredorController();

credorRouter.post('/', credorController.create);

export default credorRouter;
