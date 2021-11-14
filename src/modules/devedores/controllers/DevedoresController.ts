import { Request, Response } from "express";
import CreateDevedorService from "../services/CreateDevedorService";

export default class DevedoresController{
    public async create(request: Request, response: Response){
        const { name,cnpj } = request.body;

        const creatDevedor = new CreateDevedorService();

        const devedor = await creatDevedor.execute({name,cnpj});

        return response.json(devedor);
    }
}