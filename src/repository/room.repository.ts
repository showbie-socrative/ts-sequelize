import { FindOptions } from "sequelize/types";
import { Room } from "../models";
import { DatabaseRepository } from "./database.repository";

class RoomRepository extends DatabaseRepository<Room> {
  static instance: RoomRepository;

  constructor() {
    if (RoomRepository.instance) {
      return RoomRepository.instance;
    }

    super(Room);
    RoomRepository.instance = this;
  }

  async findAll(options?: FindOptions) {
    return super.findAll(options);
  }
}

export const roomRepository = new RoomRepository();
