import { HttpException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { GetRandomDto } from './dtos/get-random.dto';
import { SearchResultDto } from './dtos/get-search.dto';

@Injectable()
export class JokesService {
  async getRandom(): Promise<GetRandomDto> {
    const response = await axios.get<GetRandomDto>(
      'https://api.chucknorris.io/jokes/random',
    );
    return response.data;
  }

  async getSearchCategory(category: string): Promise<GetRandomDto> {
    const response = await axios.get<GetRandomDto>(
      `https://api.chucknorris.io/jokes/random?category=${category}`,
    );
    return response.data;
  }

  async getCategories(): Promise<string[]> {
    const response = await axios.get<string[]>(
      'https://api.chucknorris.io/jokes/categories',
    );
    return response.data;
  }

  async search(query: string): Promise<SearchResultDto> {
    try {
      const response = await axios.get<{ total: number; result: any[] }>(
        `https://api.chucknorris.io/jokes/search?query=${query}`,
      );
      return {
        total: response.data.total,
        result: response.data.result,
      };
    } catch (error) {
      return { total: 0, result: [] };
    }
  }
}
