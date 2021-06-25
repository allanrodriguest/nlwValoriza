import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1624335083498 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns:[
                    {
                        name: "id",
                        type: "uuid", // Gera numeros randomicos - Gerador de int
                        isPrimary: true              
                    },
                    {
                        name: "name",
                        type: "varchar" // string == varchar (em Banco de Dados)
                    },
                    {
                        name: "email",
                        type: "varchar" 
                    },
                    {
                        name: "admin",
                        type: "boolean", // 1 = admin || 0 = nao admin
                        default: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
