import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class CreateDogs1604936080137 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'dogs',
        columns: [
          new TableColumn({
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          }),
          new TableColumn({
            name: 'name',
            type: 'varchar(255)',
            isNullable: false,
            isUnique: false,
          }),
          new TableColumn({
            name: 'breed',
            type: 'varchar(255)',
            isNullable: false,
          }),
          new TableColumn({
            name: 'color',
            type: 'varchar(255)',
            isNullable: false,
          }),
        ],
      }),
      false
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('dogs');
  }
}
