import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CardsModule } from './cards/cards.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CardsModule, PrismaModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
