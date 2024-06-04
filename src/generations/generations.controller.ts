import { Controller, Post, Body, Res } from '@nestjs/common';
import { GenerationsService } from './generations.service';
import { TranslateWordDto } from './dto/translate-word.dto';
import { Response } from 'express';

@Controller('generations')
export class GenerationsController {
  constructor(private readonly generationsService: GenerationsService) {}

  @Post('/translate-word')
  async translateWord(
    @Body() translateWord: TranslateWordDto,
    @Res() res: Response,
  ) {
    try {
      const translation = await this.generationsService.translateWord(
        translateWord.word,
        translateWord.fromLanguage,
        translateWord.toLanguage,
      );
      res.status(200).json(translation);
    } catch (error) {
      res.status(500).json({ message: 'Error translating the word' });
    }
  }
}
