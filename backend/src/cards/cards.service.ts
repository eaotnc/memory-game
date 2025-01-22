import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CardsService {
  constructor(private prisma: PrismaService) {}

  async findByRandom(take: number) {
    const count = await this.prisma.card.count();
    const skip = Math.floor(Math.random() * (count - take));
    return await this.prisma.card.findMany({
      take,
      skip: skip,
      orderBy: {
        imageURL: 'desc',
      },
    });
  }
}
