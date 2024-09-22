import { ApiProperty } from '@nestjs/swagger';

export class BaseUser {
  @ApiProperty()
  id?: number;
  @ApiProperty()
  username: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  picture?: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  confirmPassword?: string;
  @ApiProperty()
  designation?: string;
}
