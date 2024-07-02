import { Resolver, Query, Args } from '@nestjs/graphql';
import { JokesService } from './chuck-norris.service';
import { GetRandomDto } from './dtos/get-random.dto'; // Removido duplicado
import { CategoriesDto } from './dtos/get-categories.dto';
import { SearchResultDto } from './dtos/get-search.dto';
import { GetCategoryArgs } from './args/get-category.args';
import { getSearchCategory } from './args/get-search-word.args';

@Resolver()
export class JokesResolver {
  constructor(private readonly jokesService: JokesService) { }

  @Query(() => GetRandomDto)
  async random(): Promise<GetRandomDto> {
    return await this.jokesService.getRandom();
  }

  @Query(() => GetRandomDto)
  async searchCategory(@Args() args: GetCategoryArgs): Promise<GetRandomDto> {
    return await this.jokesService.getSearchCategory(args.category);
  }

  @Query(() => CategoriesDto)
  async categories(): Promise<CategoriesDto> {
    const categories = await this.jokesService.getCategories();
    return { categories };
  }

  @Query(() => SearchResultDto)
  async searchWord(@Args() args: getSearchCategory): Promise<SearchResultDto> {
    return this.jokesService.search(args.searchWord);
  }
}
