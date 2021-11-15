import { getCustomRepository } from "typeorm";
import { CredoresRepository } from "../../credores/typeorm/repositories/CredoresRepository";
import { DevedoresRepository } from "../../devedores/typeorm/repositories/DevedoresRepository";
import Pagamento from "../typeorm/entities/Pagamento";
import { PagamentosRespository } from "../typeorm/repositories/PagamentosRepository";

interface IRequest{
    valor_inicial: number;
    valor_final: number;
    status_remessa: string;
    motivo: string;
    devedor_id: string;
    credor_id: string;
}

class CreatePagamentoService{
    public async execute({valor_inicial,valor_final,status_remessa,motivo,devedor_id, credor_id}: IRequest): Promise<Pagamento>{
        const pagamentoRepository = getCustomRepository(PagamentosRespository);
        const devedoresRepository = getCustomRepository(DevedoresRepository); 
        const credorRepository = getCustomRepository(CredoresRepository);

        const devedorExists = await devedoresRepository.findOne(devedor_id);

        if(!devedorExists){
            const pagamento = await pagamentoRepository.save({
                valor_inicial,
                valor_final,
                status_remessa: 'não aprovado',
                motivo: 'Devedor Não encontrado',
            })

            return pagamento;
        }

        const credorExists = await credorRepository.findOne(credor_id);

        if(!credorExists){
            const pagamento = await pagamentoRepository.save({
                valor_inicial,
                valor_final,
                status_remessa: 'não aprovado',
                motivo: 'Credor Não encontrado',
            })

            return pagamento;
        }

        if(credorExists?.status != 'aprovado'){
            const pagamento = await pagamentoRepository.save({
                valor_inicial,
                valor_final,
                status_remessa: 'não aprovado',
                motivo: 'Credor não aprovado',
            })

            return pagamento;
        }

        if(valor_final<=0 || valor_inicial<=0){
            const pagamento = await pagamentoRepository.save({
                valor_inicial,
                valor_final,
                status_remessa: 'não aprovado',
                motivo: 'Valor inicial e valor final não podem ser menores que 0',
            })

            return pagamento;
        }

        const pagamento = await pagamentoRepository.create({
            valor_inicial,
            valor_final,
            status_remessa,
            motivo,
        })

        await pagamentoRepository.save(pagamento);

        return pagamento;
    }
}

export default CreatePagamentoService;