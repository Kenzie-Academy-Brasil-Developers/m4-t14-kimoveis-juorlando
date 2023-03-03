import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import RealEstate from "./realEstate.entities";
import User from "./user.entities";

@Entity("schedules_users_properties")
class Schedules {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time without time zone" })
  hour: string;

  @ManyToOne(() => RealEstate)
  @JoinColumn()
  realEstate: RealEstate;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;
}

export default Schedules;
