import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Address from "./addressEntitie";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn("uuid")
  uuid!: string;

  @Column()
  primaryName!: string;

  @Column()
  lastName!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ unique: true })
  cpf!: string;

  @Column()
  birthDate!: Date;

  @Column({ select: false })
  password!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @Column({ default: false })
  confirmed!: boolean;

  @OneToMany(() => Address, (address) => address.user)
  adresses!: Address[];
}
