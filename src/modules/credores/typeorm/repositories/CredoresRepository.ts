import { EntityRepository, Repository } from "typeorm";
import Credor from "../entities/Credor";

@EntityRepository(Credor)
export class CredoresRepository extends Repository<Credor> {
    public async findByCnpj(cnpj: string): Promise<Credor | undefined>{
        const devedor = this.findOne({
            where:{
                cnpj,
            }
        })

        return devedor;
    }
}