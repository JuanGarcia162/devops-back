import { MigrationInterface, QueryRunner } from "typeorm"

export class addCompletedToTodos1659143656931 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`alter table todos add column completed boolean not null default false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`alter table todos drop column completed`);
    }

}
