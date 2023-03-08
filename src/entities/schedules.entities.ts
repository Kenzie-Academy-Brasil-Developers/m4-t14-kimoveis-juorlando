import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import RealEstate from "./realEstate.entities";
import User from "./user.entities";

@Entity("schedules_users_properties")
class Schedules {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => RealEstate, {eager: true})
  @JoinColumn()
  realEstate: RealEstate;

  @ManyToOne(() => User, {eager: true})
  @JoinColumn()
  user: User;
}

export default Schedules;
