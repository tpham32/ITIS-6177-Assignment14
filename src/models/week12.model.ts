import {Entity, model, property} from '@loopback/repository';

@model()
export class Week12 extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  description?: string;


  constructor(data?: Partial<Week12>) {
    super(data);
  }
}

export interface Week12Relations {
  // describe navigational properties here
}

export type Week12WithRelations = Week12 & Week12Relations;
