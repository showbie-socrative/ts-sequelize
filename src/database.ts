import { Sequelize } from "sequelize-typescript";
import { Student, Room } from "./models";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: ":memory:",
  models: [Room, Student],
  repositoryMode: false
});
