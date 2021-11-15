import { Router } from "express";
import PagamentosController from "../controllers/PagementoController";
import { celebrate, Joi, Segments } from 'celebrate';

const pagamentoRouter = Router();
const pagamentoController = new PagamentosController();

pagamentoRouter.post(
    '/', 
    celebrate({
        [Segments.BODY]:{
            valor_inicial: Joi.number().required(),
            valor_final: Joi.number().required(),
            status_remessa: Joi.string().required(),
            motivo: Joi.string().required(),
            devedor_id: Joi.string().required(),
            credor_id: Joi.string().required(),
        }
    }),
    pagamentoController.create
);

export default pagamentoRouter;