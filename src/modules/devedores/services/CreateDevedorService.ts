import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Devedor from "../typeorm/entities/Devedor";
import { DevedoresRepository } from "../typeorm/repositories/DevedoresRepository";

interface IRequest{
    name: string;
    cnpj: string;
}

class CreateDevedorService {
    public async execute({name, cnpj}: IRequest): Promise<Devedor>{
        const devedorRepository = getCustomRepository(DevedoresRepository);

        const devedorExists = await devedorRepository.findByCnpj(cnpj);
        
        if(devedorExists){
            throw new AppError("Há uma outra conta cadastrada com esse CNPJ!")
        }

        const devedor = devedorRepository.create({
            name,
            cnpj,
        });

        await devedorRepository.save(devedor);

        return devedor;
    }
}

export default CreateDevedorService;