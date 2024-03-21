/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginRepository } from './repository/login.repository';

@Module({
  controllers: [LoginController],
  providers: [LoginService, PrismaService, LoginRepository],
})
export class LoginModule { }
