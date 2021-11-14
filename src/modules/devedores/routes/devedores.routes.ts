import { Router } from "express";
import DevedoresController from "../controllers/DevedoresController";

const devedorRouter = Router();
const devedoresController = new DevedoresController();

devedorRouter.post('/', devedoresController.create);

export default devedorRouter;