import { Injectable } from '@nestjs/common';
import { InvestCreateRequestDto } from '../dtos/invest-create-request.dto';
import { InvestCreateResponseDto } from '../dtos/invest-create-response.dto';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { InvestFindOneRequestDto } from '../dtos/invest-find-one-request.dto';
import { InvestFindOneResponseDto } from '../dtos/invest-find-one-response.dto';
import { InvestFindManyResponseDto } from '../dtos/invest-find-many-response.dto';

@Injectable()
export class InvestService {
  constructor(private prisma: PrismaService) {}

  async listFinancialAssets(): Promise<InvestFindManyResponseDto[]> {
    return this.prisma.financialAssets.findMany({
      where: {
        userId: 1,
      },
    });
  }

  async findFinancialAssets({
    code,
  }: InvestFindOneRequestDto): Promise<InvestFindOneResponseDto> {
    return this.prisma.financialAssets.findUnique({
      where: {
        code,
        userId: 1,
      },
    });
  }

  public async create({
    code,
    name,
    description,
    type,
  }: InvestCreateRequestDto): Promise<InvestCreateResponseDto> {
    return this.prisma.financialAssets.create({
      data: {
        userId: 1,
        code,
        name,
        description,
        type,
      },
    });
  }
}
