import { Body, Controller, Get, Post } from '@nestjs/common';
import { ScoreService } from './score.service';
import { ScoreBoard } from '@prisma/client';
import { CreateScoreDto } from './score.dto';

@Controller('score')
export class ScoreController {
  constructor(private scoreService: ScoreService) {}

  @Get()
  async findAll(): Promise<ScoreBoard[]> {
    return this.scoreService.findAll();
  }

  @Post()
  async create(@Body() createScoreDto: CreateScoreDto): Promise<ScoreBoard> {
    return this.scoreService.create(createScoreDto);
  }
}
