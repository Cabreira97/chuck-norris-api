import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class getSearchCategory {
  @Field({ nullable: true })
  searchWord?: string;
}
