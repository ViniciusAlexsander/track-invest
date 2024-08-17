import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { InvestModule } from './modules/invest/invest.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, InvestModule],
})
export class AppModule {}
