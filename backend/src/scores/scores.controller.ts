import { Body, Controller, Get, Post } from '@nestjs/common';
import { ScoresService } from './scores.service';
import { ScoreBoard } from '@prisma/client';
import { CreateScoreDto } from './scores.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('scores')
export class ScoresController {
  constructor(private scoresService: ScoresService) {}

  @Get()
  @ApiOperation({ summary: 'get leaderboard' })
  async findAll(): Promise<ScoreBoard[]> {
    return this.scoresService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'save user score' })
  async create(@Body() createScoreDto: CreateScoreDto): Promise<ScoreBoard> {
    return this.scoresService.create(createScoreDto);
  }
}
