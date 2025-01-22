import { Card } from '@prisma/client';
import { CardsService } from './cards.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('cards')
export class CardsController {
  constructor(private cardsService: CardsService) {}

  @Get('/')
  async findByRandomDefault(): Promise<Card[]> {
    return this.cardsService.findByRandom(8);
  }

  @Get('/:numberOfCard')
  async findRandomCardByAmount(
    @Param('numberOfCard') numberOfCard: number,
  ): Promise<Card[]> {
    const parsednumberOfCard = parseInt(numberOfCard.toString(), 10);
    return this.cardsService.findByRandom(parsednumberOfCard);
  }
}
