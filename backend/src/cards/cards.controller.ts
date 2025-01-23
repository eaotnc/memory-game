import { Card } from '@prisma/client';
import { CardsService } from './cards.service';
import { Controller, Get, Param } from '@nestjs/common';
import { CONFIG } from 'src/config';
import { ApiOperation } from '@nestjs/swagger';

@Controller('cards')
export class CardsController {
  constructor(private cardsService: CardsService) {}

  @Get()
  @ApiOperation({ summary: 'get random cards default 4x4 table' })
  async findByRandomDefault(): Promise<Card[]> {
    const cards = await this.cardsService.findByRandom(
      CONFIG.DEFAULT_NUMBER_OF_CARD,
    );
    const multipleCards = [...cards, ...cards];
    const shuffledCards = multipleCards.sort(() => Math.random() - 0.5);
    return shuffledCards;
  }

  @Get('/:numberOfCard')
  @ApiOperation({ summary: 'get random cards by NumberOfCard ' })
  async findRandomCardByAmount(
    @Param('numberOfCard') numberOfCard: number,
  ): Promise<Card[]> {
    const parsedNumberOfCard = parseInt(numberOfCard.toString(), 10);
    const cards = await this.cardsService.findByRandom(parsedNumberOfCard / 2);
    const multipleCards = [...cards, ...cards];
    const shuffledCards = multipleCards.sort(() => Math.random() - 0.5);
    return shuffledCards;
  }
}
