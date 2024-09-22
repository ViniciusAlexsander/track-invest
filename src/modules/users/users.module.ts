import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UsersService } from './users.service';

@Module({
  imports: [],
  controllers: [],
  providers: [UsersService, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
