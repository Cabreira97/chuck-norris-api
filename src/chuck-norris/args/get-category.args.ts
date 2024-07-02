import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetCategoryArgs {
  @Field({ nullable: true })
  category?: string;
}
