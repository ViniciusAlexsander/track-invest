import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { AssetsCreateResponseDto } from '../dtos/assets-create-response.dto';
import { AssetsFindManyRequestDto } from '../dtos/assets-find-many-request.dto';
import { AssetsFindManyResponseDto } from '../dtos/assets-find-many-response.dto';
import { AssetsReportResponseDto } from '../dtos/assets-report-response.dto';

@Injectable()
export class AssetsService {
  constructor(private prisma: PrismaService) {}

  public async create({ assetsId, quantity, value }: AssetsCreateResponseDto) {
    return this.prisma.assetsBuy.create({
      data: {
        assetsId,
        quantity,
        value,
      },
    });
  }

  async findManyAssets({
    assetsId,
  }: AssetsFindManyRequestDto): Promise<AssetsFindManyResponseDto[]> {
    return this.prisma.assetsBuy.findMany({
      where: {
        assetsId: Number(assetsId),
      },
    });
  }

  async assetsReport({
    assetsId,
  }: AssetsFindManyRequestDto): Promise<AssetsReportResponseDto> {
    const assets = await this.prisma.assetsBuy.findMany({
      where: {
        assetsId: Number(assetsId),
      },
    });

    const response: AssetsReportResponseDto = {
      averagePrice: 0,
      totalPrice: 0,
      totalQuantity: 0,
    };

    assets.map((asset) => {
      response.totalPrice = response.totalPrice += asset.value * asset.quantity;
      response.totalQuantity = response.totalQuantity += asset.quantity;
    });

    response.averagePrice = response.totalPrice / response.totalQuantity;

    return response;
  }
}
