import { Request, Response } from "express";
import CreateCredorService from "../services/CreateCredorService";

export default class CredorController{
    public async create(request: Request, response: Response){
        const { name, cnpj,status } = request.body;

        const createCredor = new CreateCredorService();

        const credor = await createCredor.execute({ name,cnpj,status });

        return response.json(credor);
    }
}