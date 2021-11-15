import { EntityRepository, Repository } from "typeorm";
import Pagamento from "../entities/Pagamento";

@EntityRepository(Pagamento)
export class PagamentosRespository extends Repository<Pagamento>{

    public async findById(id: string): Promise<Pagamento | void>{
        const pagamento = this.findById(id);

        return pagamento;
    }

}