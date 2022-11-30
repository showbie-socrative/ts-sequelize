import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table
} from "sequelize-typescript";
import { Room } from "./room.model";

interface StudentModelAttributes {
  name: string;
}

interface StudentCreationAttributes extends StudentModelAttributes {}

@Table
export class Student extends Model
  implements StudentModelAttributes, StudentCreationAttributes {
  @Column name!: string;
  @ForeignKey(() => Room) @Column roomId!: number;
  @BelongsTo(() => Room) room: Room;
}
