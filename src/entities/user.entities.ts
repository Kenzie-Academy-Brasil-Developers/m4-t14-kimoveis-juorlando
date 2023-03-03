import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 45, unique: true })
  email: string;

  @Column({ type: "boolean", default: false })
  admin: boolean;

  @Column({ length: 120 })
  password: string;

  @CreateDateColumn({type: "date"})
  createAt: Date | string;

  @UpdateDateColumn({type: "date"})
  updateAt: Date | string;

  @DeleteDateColumn({type: "date"})
  deleteAt: Date | string | null;
}

export default User;
