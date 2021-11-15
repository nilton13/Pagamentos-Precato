import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Credor from "../typeorm/entities/Credor";
import { CredoresRepository } from "../typeorm/repositories/CredoresRepository";

interface IRequest{
    name: string;
    cnpj: string;
    status: string;
}

class CreateCredorService {
    public async execute({ name,cnpj,status }: IRequest): Promise<Credor>{
        const credorRepository = getCustomRepository(CredoresRepository);

        const credorExists = await credorRepository.findByCnpj(cnpj);

        if(credorExists){
            throw new AppError("Há um credor cadastrado com esse CNPJ!")
        }

        const credor = credorRepository.create({
            name,
            cnpj,
            status
        });

        await credorRepository.save(credor);

        return credor;
    }
}

export default CreateCredorService;