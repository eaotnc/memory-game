import { Body, Controller, Get, Post } from '@nestjs/common';
import { ScoreService } from './score.service';
import { ScoreBoard } from '@prisma/client';
import { CreateScoreDto } from './score.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('score')
export class ScoreController {
  constructor(private scoreService: ScoreService) {}

  @Get()
  @ApiOperation({ summary: 'get leaderboard' })
  async findAll(): Promise<ScoreBoard[]> {
    return this.scoreService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'save user score' })
  async create(@Body() createScoreDto: CreateScoreDto): Promise<ScoreBoard> {
    return this.scoreService.create(createScoreDto);
  }
}
