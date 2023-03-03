import { MigrationInterface, QueryRunner } from "typeorm";

export class fixCreateTablesAll31677857096918 implements MigrationInterface {
    name = 'fixCreateTablesAll31677857096918'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "createAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updateAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "createAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "updateAt" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "updateAt" SET DEFAULT '2023-03-03'`);
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "createAt" SET DEFAULT '2023-03-03'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updateAt" SET DEFAULT '2023-03-03'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "createAt" SET DEFAULT '2023-03-03'`);
    }

}
