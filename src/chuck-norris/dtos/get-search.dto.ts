import { Field, ObjectType } from '@nestjs/graphql';
import { GetRandomDto } from './get-random.dto';

@ObjectType()
export class SearchResultDto {
  @Field()
  total: number;

  @Field(() => [GetRandomDto])
  result: GetRandomDto[];
}
