import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,                
} from "typeorm";                 // SELECT * FROM 
import { v4 as uuid } from "uuid"; /// ClientePgto as "Pagamento dos Clientes"

@Entity("users")
class User {
  @PrimaryColumn() 
  readonly id: string;                // varchar 

  @Column()
  name: string;                 

  @Column()
  email: string;

  @Column()
  admin: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
