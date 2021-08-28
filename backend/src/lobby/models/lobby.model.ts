import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Lobby {
  @Field((type) => ID)
  id: number;

  @Field()
  count: number;
}