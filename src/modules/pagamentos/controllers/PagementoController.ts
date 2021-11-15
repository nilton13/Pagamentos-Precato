import { Request, Response } from "express";
import CreatePagamentoService from "../services/CreatePagamentoService";

export default class PagamentoController{
    public async create(request: Request, response: Response){
        const { valor_inicial, valor_final,status_remessa,motivo,devedor_id,credor_id } = request.body;

        const createPagamento = new CreatePagamentoService();

        const pagamento = await createPagamento.execute({valor_inicial, valor_final,status_remessa,motivo,devedor_id,credor_id})

        return response.json(pagamento);
    }
}