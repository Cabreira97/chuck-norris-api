import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { JokesService } from './chuck-norris.service';
import { JokesResolver } from './chuck-norris.resolver';

@Module({
  imports: [HttpModule],
  providers: [JokesService, JokesResolver],
})
export class JokesModule { }
