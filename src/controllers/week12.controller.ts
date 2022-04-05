import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Week12} from '../models';
import {Week12Repository} from '../repositories';

export class Week12Controller {
  constructor(
    @repository(Week12Repository)
    public week12Repository : Week12Repository,
  ) {}

  @post('/week12s')
  @response(200, {
    description: 'Week12 model instance',
    content: {'application/json': {schema: getModelSchemaRef(Week12)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Week12, {
            title: 'NewWeek12',
            exclude: ['id'],
          }),
        },
      },
    })
    week12: Omit<Week12, 'id'>,
  ): Promise<Week12> {
    return this.week12Repository.create(week12);
  }

  @get('/week12s/count')
  @response(200, {
    description: 'Week12 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Week12) where?: Where<Week12>,
  ): Promise<Count> {
    return this.week12Repository.count(where);
  }

  @get('/week12s')
  @response(200, {
    description: 'Array of Week12 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Week12, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Week12) filter?: Filter<Week12>,
  ): Promise<Week12[]> {
    return this.week12Repository.find(filter);
  }

  @patch('/week12s')
  @response(200, {
    description: 'Week12 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Week12, {partial: true}),
        },
      },
    })
    week12: Week12,
    @param.where(Week12) where?: Where<Week12>,
  ): Promise<Count> {
    return this.week12Repository.updateAll(week12, where);
  }

  @get('/week12s/{id}')
  @response(200, {
    description: 'Week12 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Week12, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Week12, {exclude: 'where'}) filter?: FilterExcludingWhere<Week12>
  ): Promise<Week12> {
    return this.week12Repository.findById(id, filter);
  }

  @patch('/week12s/{id}')
  @response(204, {
    description: 'Week12 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Week12, {partial: true}),
        },
      },
    })
    week12: Week12,
  ): Promise<void> {
    await this.week12Repository.updateById(id, week12);
  }

  @put('/week12s/{id}')
  @response(204, {
    description: 'Week12 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() week12: Week12,
  ): Promise<void> {
    await this.week12Repository.replaceById(id, week12);
  }

  @del('/week12s/{id}')
  @response(204, {
    description: 'Week12 DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.week12Repository.deleteById(id);
  }
}
