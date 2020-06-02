import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { BillsModule } from './bills/bills.module';

@Module({
  imports: [DbModule, UsersModule, BillsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
