import { Module } from '@nestjs/common';
import { InvestController } from './invest.controller';
import { InvestService } from './services';

@Module({
  imports: [],
  controllers: [InvestController],
  providers: [InvestService],
  exports: [InvestService],
})
export class InvestModule {}
