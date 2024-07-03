import { Test, TestingModule } from '@nestjs/testing';
import { ChuckNorrisService } from './chuck-norris.service';
import { GetRandomDto } from './dtos/get-random.dto';
import { SearchResultDto } from './dtos/get-search.dto';
import { GetCategoryArgs } from './args/get-category.args';
import { getSearchCategory } from './args/get-search-word.args';
import { ChuckNorrisResolver } from './chuck-norris.resolver';

describe('JokesResolver', () => {
  let resolver: ChuckNorrisResolver;
  let service: ChuckNorrisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ChuckNorrisResolver,
        {
          provide: ChuckNorrisService,
          useValue: {
            getRandom: jest.fn(),
            getSearchCategory: jest.fn(),
            getCategories: jest.fn(),
            search: jest.fn(),
          },
        },
      ],
    }).compile();

    resolver = module.get<ChuckNorrisResolver>(ChuckNorrisResolver);
    service = module.get<ChuckNorrisService>(ChuckNorrisService);
  });

  it('should return a random joke', async () => {
    const mockData: GetRandomDto = {
      id: '1',
      value: 'Chuck Norris joke',
      categories: [],
      created_at: '',
      icon_url: '',
      updated_at: '',
      url: '',
    };
    jest.spyOn(service, 'getRandom').mockResolvedValue(mockData);

    const result = await resolver.random();
    expect(result).toEqual(mockData);
  });

  it('should return a joke by category', async () => {
    const mockData: GetRandomDto = {
      id: '1',
      value: 'Chuck Norris joke',
      categories: [],
      created_at: '',
      icon_url: '',
      updated_at: '',
      url: '',
    };
    jest.spyOn(service, 'getSearchCategory').mockResolvedValue(mockData);

    const args: GetCategoryArgs = { category: 'test' };
    const result = await resolver.searchCategory(args);
    expect(result).toEqual(mockData);
  });

  it('should return joke categories', async () => {
    const mockCategories = ['animal', 'career', 'celebrity'];
    jest.spyOn(service, 'getCategories').mockResolvedValue(mockCategories);

    const result = await resolver.categories();
    expect(result).toEqual({ categories: mockCategories });
  });

  it('should return search results', async () => {
    const mockSearchResult: SearchResultDto = {
      total: 1,
      result: [
        {
          id: '1',
          value: 'Chuck Norris joke',
          categories: [],
          created_at: '',
          icon_url: '',
          updated_at: '',
          url: '',
        },
      ],
    };
    jest.spyOn(service, 'search').mockResolvedValue(mockSearchResult);

    const args: getSearchCategory = { searchWord: 'chuck' };
    const result = await resolver.searchWord(args);
    expect(result).toEqual(mockSearchResult);
  });
});
