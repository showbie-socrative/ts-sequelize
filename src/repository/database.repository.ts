import { FindOptions } from 'sequelize';
import { Model, ModelCtor, Repository } from 'sequelize-typescript';
import { sequelize } from '../database';

export abstract class DatabaseRepository<M extends Model> {
  private repository: Repository<M>;

  constructor(model: ModelCtor<M>) {
    this.repository = sequelize.getRepository<M>(model);
  }

  async findAll(options?: FindOptions): Promise<M[]> {
    return this.repository
      .findAll<M>(options)
      .then((response) => response)
      .catch((err) => {
        throw new Error(err);
      });
  }

  async findOne(options?: FindOptions): Promise<M | null> {
    return this.repository
      .findOne<M>(options)
      .then((response) => response)
      .catch((err) => {
        throw new Error(err);
      });
  }
}
