import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserInformation } from './dtos/profile-validate-request.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async validateUser(profile: UserInformation): Promise<any> {
    // Here you can create or find the user in your database
    return this.prisma.user.create({
      data: {
        picture: profile.photos[0].value,
        googleId: profile.id,
        email: profile.emails[0].value,
        name: profile.displayName,
      },
    });
  }
}
