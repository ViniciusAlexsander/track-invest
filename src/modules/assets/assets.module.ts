import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AssetsController } from './assets.controller';
import { AssetsService } from './services';

@Module({
  imports: [],
  controllers: [AssetsController],
  providers: [AssetsService, PrismaService],
  exports: [AssetsService],
})
export class AssetsModule {}
