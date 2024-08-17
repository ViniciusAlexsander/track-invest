import { ApiProperty } from '@nestjs/swagger';
// import { IsNotEmpty } from 'class-validator';

export class InvestCreateRequestDto {
  // @IsNotEmpty()
  @ApiProperty({
    example: 'bbas3',
  })
  readonly code: string;

  // @IsNotEmpty()
  @ApiProperty({
    example: 'Banco do Brasil SA',
  })
  readonly name: string;
}
