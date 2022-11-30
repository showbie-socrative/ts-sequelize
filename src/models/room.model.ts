import { Column, HasMany, Model, Table } from "sequelize-typescript";
import { Student } from "./student.model";

interface RoomModelAttributes {
  name: string;
}

interface RoomCreationAttributes extends RoomModelAttributes {}

@Table
export class Room extends Model
  implements RoomModelAttributes, RoomCreationAttributes {
  @Column name!: string;
  @HasMany(() => Student) students: Student[];
}
