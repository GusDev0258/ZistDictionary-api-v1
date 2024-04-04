import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OllamaModule } from './ollama/ollama.module';
import { GenerationsModule } from './generations/generations.module';

@Module({
  imports: [OllamaModule, GenerationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
