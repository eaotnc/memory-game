import { Injectable } from '@nestjs/common';
import { ScoreBoard } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

interface ScoreBoardCreate {
  clicks: number;
  name: string;
  timesInSeconds: number;
}

@Injectable()
export class ScoresService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<ScoreBoard[]> {
    return this.prisma.scoreBoard.findMany();
  }

  create({
    name,
    clicks,
    timesInSeconds,
  }: ScoreBoardCreate): Promise<ScoreBoard> {
    return this.prisma.scoreBoard.create({
      data: {
        name,
        clicks,
        timesInSeconds,
      },
    });
  }
}
