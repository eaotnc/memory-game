import { Module } from '@nestjs/common';
import { CardsModule } from './cards/cards.module';
import { PrismaModule } from './prisma/prisma.module';
import { ScoresModule } from './scores/scores.module';

@Module({
  imports: [CardsModule, PrismaModule, ScoresModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
