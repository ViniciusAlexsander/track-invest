import { Module } from '@nestjs/common';
import { InvestController } from './invest.controller';
import { InvestService } from './services';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [InvestController],
  providers: [InvestService, PrismaService],
  exports: [InvestService],
})
export class InvestModule {}
