import { Module } from '@nestjs/common';
import { ScoresController } from './scores.controller';
import { ScoresService } from './scores.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ScoresController],
  providers: [ScoresService],
  imports: [PrismaModule],
})
export class ScoresModule {}
