import {MigrationInterface, QueryRunner} from "typeorm";

export class serverMigration1637329525529 implements MigrationInterface {
    name = 'serverMigration1637329525529'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "student" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying(128) NOT NULL, "surname" character varying(128) NOT NULL, "student_number" integer NOT NULL, "birth_date" TIMESTAMP NOT NULL, "grade" integer NOT NULL, "classroom_id" uuid NOT NULL, CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "classroom" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying(128) NOT NULL, "code" character varying(32) NOT NULL, "level" integer NOT NULL, "student_count" integer NOT NULL DEFAULT '0', CONSTRAINT "UQ_00d3d5c9da6675921f58d8a87f5" UNIQUE ("code"), CONSTRAINT "PK_729f896c8b7b96ddf10c341e6ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userName" character varying(128) NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_a285ca03d7198308720677f5315" FOREIGN KEY ("classroom_id") REFERENCES "classroom"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_a285ca03d7198308720677f5315"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "classroom"`);
        await queryRunner.query(`DROP TABLE "student"`);
    }

}
