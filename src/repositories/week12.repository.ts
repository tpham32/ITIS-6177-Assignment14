import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatabaseDataSource} from '../datasources';
import {Week12, Week12Relations} from '../models';

export class Week12Repository extends DefaultCrudRepository<
  Week12,
  typeof Week12.prototype.id,
  Week12Relations
> {
  constructor(
    @inject('datasources.database') dataSource: DatabaseDataSource,
  ) {
    super(Week12, dataSource);
  }
}
