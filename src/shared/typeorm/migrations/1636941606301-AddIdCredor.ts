import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddIdCredor1636941606301 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'pagamentos',
            new TableColumn({
                name: 'credor_id',
                type: 'uuid',
                isNullable: true,
            })
        )

        await queryRunner.createForeignKey(
            'pagamentos',
            new TableForeignKey({
                name: 'credor_pagamentos',
                columnNames:['credor_id'],
                referencedTableName: 'credores',
                referencedColumnNames: ['id'],
                onDelete: 'SET NULL',
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pagamentos', 'credor_pagamentos');
        await queryRunner.dropColumn('pagamentos', 'credor_id');
    }

}
