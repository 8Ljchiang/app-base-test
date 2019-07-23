import { AccountSchema } from './account.schema';
import { Module } from '@nestjs/common';
import { AccountResolver } from './account.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountService } from './account.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Account', schema: AccountSchema }]),
  ],
  controllers: [],
  providers: [AccountResolver, AccountService],
})
export class AccountModule {}
