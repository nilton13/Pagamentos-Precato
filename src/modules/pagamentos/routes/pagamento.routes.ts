import { Router } from "express";
import PagamentosController from "../controllers/PagementoController";

const pagamentoRouter = Router();
const pagamentoController = new PagamentosController();

pagamentoRouter.post('/', pagamentoController.create);

export default pagamentoRouter;