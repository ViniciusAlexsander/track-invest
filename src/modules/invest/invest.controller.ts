import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  InvestCreateRequestDto,
  InvestCreateResponseDto,
} from 'src/dtos/invest';
import { InvestService } from './services';
// import { AuthGuard } from '@nestjs/passport';

@Controller({
  path: 'invest',
  version: '1',
})
export class InvestController {
  constructor(private investService: InvestService) {}

  @ApiOperation({ description: 'User authentication' })
  @ApiOkResponse({ description: 'Successfully authenticated user' })
  @ApiUnauthorizedResponse({ description: 'Invalid credentials' })
  @ApiInternalServerErrorResponse({ description: 'Server error' })
  @Post('/create')
  create(
    @Body() investCreateRequestDto: InvestCreateRequestDto,
  ): Promise<InvestCreateResponseDto> {
    return this.investService.create(investCreateRequestDto);
  }

  @Get(':code')
  findOne(@Param('code') code: string) {
    return this.investService.findFinancialAssets({ code });
  }

  @Get()
  findMany() {
    return this.investService.listFinancialAssets();
  }
}
