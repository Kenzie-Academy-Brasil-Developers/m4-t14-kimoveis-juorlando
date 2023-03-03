import { MigrationInterface, QueryRunner } from "typeorm";

export class fixCreateTablesAll1677854717020 implements MigrationInterface {
    name = 'fixCreateTablesAll1677854717020'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updateAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deleteAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deleteAt" date`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deleteAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deleteAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updateAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
