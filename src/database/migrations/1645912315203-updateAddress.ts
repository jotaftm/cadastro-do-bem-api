import {MigrationInterface, QueryRunner} from "typeorm";

export class updateAddress1645912315203 implements MigrationInterface {
    name = 'updateAddress1645912315203'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" ALTER COLUMN "complement" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" ALTER COLUMN "complement" SET NOT NULL`);
    }

}
