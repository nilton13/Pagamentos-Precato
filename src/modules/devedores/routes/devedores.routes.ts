import { Router } from "express";
import DevedoresController from "../controllers/DevedoresController";
import { celebrate, Joi, Segments } from 'celebrate';

const devedorRouter = Router();
const devedoresController = new DevedoresController();

devedorRouter.post(
    '/', 
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            cnpj: Joi.string().required(),
        }
    }),
    devedoresController.create
);

export default devedorRouter;