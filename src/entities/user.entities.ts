import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from "typeorm";
import Schedules from "./schedules.entities";

@Entity("users")
class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 45, unique: true })
  email: string;

  @Column({ type: "boolean", default: false})
  admin: boolean;

  @Column({ length: 120 })
  password: string;

  @CreateDateColumn({type: "date"})
  createdAt: string;

  @UpdateDateColumn({type: "date"})
  updatedAt: string;

  @DeleteDateColumn({type: "date"})
  deletedAt: string;

  @OneToMany(() => Schedules, (schedules) => schedules.user)
  schedules: Schedules[]
}

export default User;
