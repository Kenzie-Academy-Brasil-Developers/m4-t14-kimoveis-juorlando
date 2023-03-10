import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import Address from "./addresses.entities";
import Category from "./categories.entities";
import Schedule from "./schedules.entities";

@Entity("real_estate")
class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  value: number | string;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn({type: "date"})
  createdAt: string;

  @UpdateDateColumn({type: "date"})
  updatedAt: string;

  @OneToOne(() => Address, {cascade: true, eager: true})
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Category, { eager: true})
  @JoinColumn()
  category: Category;

  @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
  schedules: Schedule[]
}

export default RealEstate;
