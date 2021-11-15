import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddIdDevedor1636942278389 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'pagamentos',
            new TableColumn({
                name: 'devedor_id',
                type: 'uuid',
                isNullable: true,
            })
        )

        await queryRunner.createForeignKey(
            'pagamentos',
            new TableForeignKey({
                name: 'devedor_pagamentos',
                columnNames:['devedor_id'],
                referencedTableName: 'devedores',
                referencedColumnNames: ['id'],
                onDelete: 'SET NULL',
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pagamentos', 'devedor_pagamentos');
        await queryRunner.dropColumn('pagamentos', 'devedor_id');
    }

}
