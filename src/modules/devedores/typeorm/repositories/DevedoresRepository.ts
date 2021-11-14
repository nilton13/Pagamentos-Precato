import { EntityRepository, Repository } from "typeorm";
import Devedor from '../entities/Devedor';

@EntityRepository(Devedor)
export class DevedoresRepository extends Repository<Devedor> {
    public async findByCnpj(cnpj: string): Promise<Devedor | undefined>{
        const devedor = this.findOne({
            where:{
                cnpj,
            }
        })

        return devedor;
    }
}