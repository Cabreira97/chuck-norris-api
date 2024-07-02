import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CategoriesDto {
  @Field(() => [String])
  categories: string[];
}
