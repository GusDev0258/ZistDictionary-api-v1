import { Injectable } from '@nestjs/common';
// import { CreateGenerationDto } from './dto/create-generation.dto';
// import { UpdateGenerationDto } from './dto/update-generation.dto';
import { OllamaEntity } from './entities/ollama.entity';

@Injectable()
export class GenerationsService {
  async translateWordFromEnglishToPortuguese(model: string, word: string) {
    const ollama = OllamaEntity.getInstance();
    ollama.setModel(model);
    const response = await ollama.translateEnglishWordToPortuguese(word);
    return response;
  }

  async translateWord(
    word: string,
    incomeLanguage: string,
    outcomeLanguage: string,
  ) {
    const ollama = OllamaEntity.getInstance();
    const response = await ollama.translateWord(
      word,
      incomeLanguage,
      outcomeLanguage,
    );
    return response.message.content;
  }
  findAll() {
    return `This action returns all generations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} generation`;
  }

  // update(id: number, updateGenerationDto: UpdateGenerationDto) {
  //   return `This action updates a #${id} generation`;
  // }

  remove(id: number) {
    return `This action removes a #${id} generation`;
  }
}
