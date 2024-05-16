import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenerationsModule } from './generations/generations.module';

@Module({
  imports: [GenerationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
