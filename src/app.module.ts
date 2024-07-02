import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChuckNorrisModule } from './chuck-norris/chuck-norris.module';

@Module({
  imports: [ChuckNorrisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
