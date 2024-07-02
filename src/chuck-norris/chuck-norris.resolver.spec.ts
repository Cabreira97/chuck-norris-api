import { Test, TestingModule } from '@nestjs/testing';
import { ChuckNorrisResolver } from './chuck-norris.resolver';

describe('ChuckNorrisResolver', () => {
  let resolver: ChuckNorrisResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChuckNorrisResolver],
    }).compile();

    resolver = module.get<ChuckNorrisResolver>(ChuckNorrisResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
