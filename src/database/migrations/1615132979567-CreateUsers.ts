import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1615132979567 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns:[
                    { name:"id", type:"uuid", isPrimary: true},
                    { name:"nome", type:"varchar", isNullable: false},
                    { name:"senha", type:"varchar", isNullable: false},
                    { name:"created_at", type:"timestamp", default:"now()"}
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
