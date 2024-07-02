import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GetRandomDto {
  @Field(() => [String])
  categories: string[];

  @Field()
  created_at: string;

  @Field()
  icon_url: string;

  @Field()
  id: string;

  @Field()
  updated_at: string;

  @Field()
  url: string;

  @Field()
  value: string;
}
