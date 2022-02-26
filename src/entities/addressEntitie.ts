import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./userEntitie";

@Entity("adresses")
export default class Address {
  @PrimaryGeneratedColumn("uuid")
  uuid!: string;

  @Column()
  zipCode!: string;

  @Column()
  publicPlace!: string;

  @Column()
  complement!: string;

  @Column()
  district!: string;

  @Column()
  city!: string;

  @Column()
  state!: string;

  @ManyToOne(() => User, (user) => user.adresses, { onDelete: "CASCADE" })
  user!: User;
}
