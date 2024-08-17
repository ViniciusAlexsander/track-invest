import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { InvestCreateRequestDto, InvestCreateResponseDto } from './dtos';
import { InvestService } from './services';
import { AuthGuard } from '@nestjs/passport';

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
}
