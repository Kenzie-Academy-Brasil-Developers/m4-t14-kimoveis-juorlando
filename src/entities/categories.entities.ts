import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("categories")
class Category {
  @PrimaryColumn()
  id: number;

  @Column({ length: 45 })
  name: string;
}

export default Category;
