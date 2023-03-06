import { MigrationInterface, QueryRunner } from "typeorm";

export class fixUserAdmin1678109042523 implements MigrationInterface {
    name = 'fixUserAdmin1678109042523'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT false`);
    }

}
