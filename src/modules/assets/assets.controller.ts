import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AssetsCreateResponseDto } from 'src/dtos/assets';
import { AssetsService } from './services';

@Controller({
  path: 'assets',
  version: '1',
})
export class AssetsController {
  constructor(private assetsService: AssetsService) {}

  @Post('/create')
  create(@Body() assetsCreateResponseDto: AssetsCreateResponseDto) {
    return this.assetsService.create(assetsCreateResponseDto);
  }

  @Get(':assetsId')
  findOne(@Param('assetsId') assetsId: string) {
    return this.assetsService.findManyAssets({ assetsId });
  }

  @Get(':assetsId/assetsReport')
  assetsReport(@Param('assetsId') assetsId: string) {
    return this.assetsService.assetsReport({ assetsId });
  }
}
