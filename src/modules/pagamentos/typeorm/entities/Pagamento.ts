import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Credor from "../../../credores/typeorm/entities/Credor";
import Devedor from "../../../devedores/typeorm/entities/Devedor";


@Entity('pagamentos')
class Pagamento {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('decimal')
    valor_inicial: number

    @Column('decimal')
    valor_final: number

    @CreateDateColumn()
    created_at: Date

    @Column()
    status_remessa: string

    @Column()
    motivo: string

    @OneToOne(() => Devedor)
    @JoinColumn({ name: 'devedor_id' })
    devedor: Devedor

    @OneToOne(() => Credor)
    @JoinColumn({ name: 'credor_id' })
    credor: Credor
}

export default Pagamento;