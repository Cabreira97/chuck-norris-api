import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ChuckNorrisService } from './chuck-norris.service';
import { JokesResolver } from './chuck-norris.resolver';

@Module({
  imports: [HttpModule],
  providers: [ChuckNorrisService, JokesResolver],
})
export class JokesModule { }
