import { Resolver, Query, Args } from '@nestjs/graphql';
import { ChuckNorrisService } from './chuck-norris.service';
import { GetRandomDto } from './dtos/get-random.dto';
import { CategoriesDto } from './dtos/get-categories.dto';
import { SearchResultDto } from './dtos/get-search.dto';
import { GetCategoryArgs } from './args/get-category.args';
import { getSearchCategory } from './args/get-search-word.args';

@Resolver()
export class ChuckNorrisResolver {
  constructor(private readonly chuckNorrisService: ChuckNorrisService) { }

  @Query(() => GetRandomDto)
  async random(): Promise<GetRandomDto> {
    return await this.chuckNorrisService.getRandom();
  }

  @Query(() => GetRandomDto)
  async searchCategory(@Args() args: GetCategoryArgs): Promise<GetRandomDto> {
    return await this.chuckNorrisService.getSearchCategory(args.category);
  }

  @Query(() => CategoriesDto)
  async categories(): Promise<CategoriesDto> {
    const categories = await this.chuckNorrisService.getCategories();
    return { categories };
  }

  @Query(() => SearchResultDto)
  async searchWord(@Args() args: getSearchCategory): Promise<SearchResultDto> {
    return this.chuckNorrisService.search(args.searchWord);
  }
}
