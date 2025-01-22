import { ApiProperty } from '@nestjs/swagger';

export class CreateScoreDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  clicks: number;

  @ApiProperty()
  timesInSeconds: number;
}
