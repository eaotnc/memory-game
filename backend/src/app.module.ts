import { Module } from '@nestjs/common';
import { CardsModule } from './cards/cards.module';
import { PrismaModule } from './prisma/prisma.module';
import { ScoreModule } from './score/score.module';

@Module({
  imports: [CardsModule, PrismaModule, ScoreModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
