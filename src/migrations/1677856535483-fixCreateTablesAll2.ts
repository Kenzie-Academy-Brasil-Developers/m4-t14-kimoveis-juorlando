import { MigrationInterface, QueryRunner } from "typeorm";

export class fixCreateTablesAll21677856535483 implements MigrationInterface {
    name = 'fixCreateTablesAll21677856535483'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "createAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updateAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "createAt"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "createAt" date NOT NULL DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "updateAt" date NOT NULL DEFAULT 'NOW()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "updateAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "createAt"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "createAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updateAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "createAt" SET DEFAULT now()`);
    }

}
