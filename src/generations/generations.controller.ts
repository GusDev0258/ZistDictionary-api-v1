import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GenerationsService } from './generations.service';
import { CreateGenerationDto } from './dto/create-generation.dto';
import { UpdateGenerationDto } from './dto/update-generation.dto';

@Controller('generations')
export class GenerationsController {
  constructor(private readonly generationsService: GenerationsService) {}

  @Post()
  create(@Body() createGenerationDto: CreateGenerationDto) {
    return this.generationsService.create(createGenerationDto);
  }

  @Get()
  findAll() {
    return this.generationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGenerationDto: UpdateGenerationDto) {
    return this.generationsService.update(+id, updateGenerationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generationsService.remove(+id);
  }
}