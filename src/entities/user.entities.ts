import { getRounds, hashSync } from "bcryptjs";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import Schedules from "./schedules.entities";

@Entity("users")
class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: "varchar", length: 45 })
  name: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column({ type: "boolean", default: false})
  admin: boolean;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @CreateDateColumn({type: "date"})
  createdAt: string;

  @UpdateDateColumn({type: "date"})
  updatedAt: string;

  @DeleteDateColumn({type: "date"})
  deletedAt: string;

  @OneToMany(() => Schedules, (schedules) => schedules.user)
  schedules: Schedules[]

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword(){
      const isEncrypted = getRounds(this.password)
      if(!isEncrypted){
          this.password = hashSync(this.password, 10)
      }
  }
}

export default User;
