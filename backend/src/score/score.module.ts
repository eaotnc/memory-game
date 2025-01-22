import { Module } from '@nestjs/common';
import { ScoreController } from './score.controller';
import { ScoreService } from './score.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ScoreController],
  providers: [ScoreService],
  imports: [PrismaModule],
})
export class ScoreModule {}
