import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePagamento1636939909425 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'pagamentos',
            columns:[
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'valor_inicial',
                    type: 'decimal'
                },
                {
                    name: 'valor_final',
                    type: 'decimal'
                },
                {
                    name: 'created_at',
                    type: 'timestamp with time zone',
                    default: 'now()',
                },
                {
                    name: 'status_remessa',
                    type: 'varchar'
                },
                {
                    name: 'motivo',
                    type: 'varchar',
                    isNullable: true
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pagamentos');
    }

}
