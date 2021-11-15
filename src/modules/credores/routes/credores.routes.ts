import { Router} from "express";
import CredorController from "../controllers/CredorController";
import { celebrate, Joi, Segments } from 'celebrate';

const credorRouter = Router();
const credorController = new CredorController();

credorRouter.post(
    '/', 
    celebrate({
        [Segments.BODY]:{
            name: Joi.string().required(),
            cnpj: Joi.string().required(),
            status: Joi.string().required(),
        }
    }),    
    credorController.create
);

export default credorRouter;
