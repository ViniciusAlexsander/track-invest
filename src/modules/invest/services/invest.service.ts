import { Injectable } from '@nestjs/common';
import { InvestCreateRequestDto } from '../dtos/invest-create-request.dto';
import { InvestCreateResponseDto } from '../dtos/invest-create-response.dto';

@Injectable()
export class InvestService {
  public async create({
    code,
    name,
  }: InvestCreateRequestDto): Promise<InvestCreateResponseDto> {
    return {
      code,
      name,
    };
  }
}
