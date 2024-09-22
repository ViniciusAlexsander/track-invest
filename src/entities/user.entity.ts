export class UserEntity {
  id: number;
  username: string;
  email: string;
  name: string;
  picture?: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
