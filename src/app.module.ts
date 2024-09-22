import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AssetsModule } from './modules/assets/assets.module';
import { AuthModule } from './modules/auth/auth.module';
import { InvestModule } from './modules/invest/invest.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    InvestModule,
    AssetsModule,
    UsersModule,
  ],
})
export class AppModule {}
