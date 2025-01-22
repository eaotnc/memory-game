import { CardsService } from './cards.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('cards')
export class CardsController {
  constructor(private cardsService: CardsService) {}

  @Get()
  async findAll(): Promise<Card[]> {
    return this.cardsService.findAll();
  }
}
