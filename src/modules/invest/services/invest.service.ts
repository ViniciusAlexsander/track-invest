import { Injectable } from '@nestjs/common';
import { InvestCreateRequestDto } from 'src/dtos/invest/invest-create-request.dto';
import { InvestCreateResponseDto } from 'src/dtos/invest/invest-create-response.dto';
import { InvestFindManyResponseDto } from 'src/dtos/invest/invest-find-many-response.dto';
import { InvestFindOneRequestDto } from 'src/dtos/invest/invest-find-one-request.dto';
import { InvestFindOneResponseDto } from 'src/dtos/invest/invest-find-one-response.dto';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class InvestService {
  constructor(private prisma: PrismaService) {}

  async listFinancialAssets(
    userId: number,
  ): Promise<InvestFindManyResponseDto[]> {
    return this.prisma.financialAssets.findMany({
      where: {
        userId,
      },
    });
  }

  async findFinancialAssets(
    { code }: InvestFindOneRequestDto,
    userId: number,
  ): Promise<InvestFindOneResponseDto> {
    return this.prisma.financialAssets.findUnique({
      where: {
        code,
        userId,
      },
    });
  }

  public async create(
    { code, name, description, type }: InvestCreateRequestDto,
    userId: number,
  ): Promise<InvestCreateResponseDto> {
    return this.prisma.financialAssets.create({
      data: {
        userId,
        code,
        name,
        description,
        type,
      },
    });
  }
}
