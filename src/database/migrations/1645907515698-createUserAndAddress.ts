import { MigrationInterface, QueryRunner } from "typeorm";

export class createUserAndAddress1645907515698 implements MigrationInterface {
  name = "createUserAndAddress1645907515698";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "primaryName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "cpf" character varying NOT NULL, "birthDate" TIMESTAMP NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "confirmed" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "PK_951b8f1dfc94ac1d0301a14b7e1" PRIMARY KEY ("uuid"))`
    );
    await queryRunner.query(
      `CREATE TABLE "adresses" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "zipCode" character varying NOT NULL, "publicPlace" character varying NOT NULL, "complement" character varying NOT NULL, "district" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "userUuid" uuid, CONSTRAINT "PK_a2abb7b8a30ae3625f785fe3a48" PRIMARY KEY ("uuid"))`
    );
    await queryRunner.query(
      `ALTER TABLE "adresses" ADD CONSTRAINT "FK_c8d5bb14c1613700c0cf166a9ba" FOREIGN KEY ("userUuid") REFERENCES "users"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "adresses" DROP CONSTRAINT "FK_c8d5bb14c1613700c0cf166a9ba"`
    );
    await queryRunner.query(`DROP TABLE "adresses"`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
