import * as faker from "faker";
import { createServer } from "http";
import { app } from "./app";
import { sequelize } from "./database";
import { Room } from "./models";

const port = process.env.PORT || 6000;
faker.seed(1245);

(async () => {
  await sequelize.sync({ force: true });

  // add some rooms
  const rooms = [];
  for (let i = 1; i <= 10; i++) {
    rooms.push({ name: faker.name.lastName() });
  }

  const repo = sequelize.getRepository(Room);
  await repo.bulkCreate(rooms);

  createServer(app).listen(port, () =>
    console.log(`Server started on http://localhost:${port}`)
  );
})();
