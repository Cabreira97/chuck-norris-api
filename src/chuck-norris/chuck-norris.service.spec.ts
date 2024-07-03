import { Test, TestingModule } from '@nestjs/testing';
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import { ChuckNorrisService } from './chuck-norris.service';
import { GetRandomDto } from './dtos/get-random.dto';
import { SearchResultDto } from './dtos/get-search.dto';

describe('JokesService', () => {
  let service: ChuckNorrisService;
  let axiosMock: AxiosMockAdapter;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChuckNorrisService],
    }).compile();

    service = module.get<ChuckNorrisService>(ChuckNorrisService);
    axiosMock = new AxiosMockAdapter(axios);
  });

  afterEach(() => {
    axiosMock.reset();
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
    axiosMock
      .onGet('https://api.chucknorris.io/jokes/random')
      .reply(200, mockData);

    const result = await service.getRandom();
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
    axiosMock
      .onGet('https://api.chucknorris.io/jokes/random?category=test')
      .reply(200, mockData);

    const result = await service.getSearchCategory('test');
    expect(result).toEqual(mockData);
  });

  it('should return joke categories', async () => {
    const mockCategories = ['animal', 'career', 'celebrity'];
    axiosMock
      .onGet('https://api.chucknorris.io/jokes/categories')
      .reply(200, mockCategories);

    const result = await service.getCategories();
    expect(result).toEqual(mockCategories);
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
    axiosMock
      .onGet('https://api.chucknorris.io/jokes/search?query=chuck')
      .reply(200, {
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
      });

    const result = await service.search('chuck');
    expect(result).toEqual(mockSearchResult);
  });

  it('should handle search error', async () => {
    axiosMock
      .onGet('https://api.chucknorris.io/jokes/search?query=error')
      .reply(500);

    const result = await service.search('error');
    expect(result).toEqual({ total: 0, result: [] });
  });
});
