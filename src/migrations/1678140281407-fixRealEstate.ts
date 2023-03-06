import { MigrationInterface, QueryRunner } from "typeorm";

export class fixRealEstate1678140281407 implements MigrationInterface {
    name = 'fixRealEstate1678140281407'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" RENAME COLUMN "updateAdt" TO "updatedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" RENAME COLUMN "updatedAt" TO "updateAdt"`);
    }

}
