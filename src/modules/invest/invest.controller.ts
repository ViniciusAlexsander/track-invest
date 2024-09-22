import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
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
    @Request() req,
  ): Promise<InvestCreateResponseDto> {
    return this.investService.create(investCreateRequestDto, req.user.sub);
  }

  @Get(':code')
  findOne(@Param('code') code: string, @Request() req) {
    return this.investService.findFinancialAssets({ code }, req.user.sub);
  }

  @Get()
  findMany(@Request() req) {
    return this.investService.listFinancialAssets(req.user.sub);
  }
}
