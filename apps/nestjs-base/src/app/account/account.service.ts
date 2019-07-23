import { CreateAccountDto } from './dto/create-account.dto';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from './interfaces/account.interface';
import { CreateAccountInfo } from './input/account.input';

@Injectable()
export class AccountService {
  constructor(@InjectModel('Account') private readonly accountModel: Model<Account>) {}

  // async create(createAccountDto: CreateAccountDto): Promise<Account> {
  async create(createInfo: CreateAccountInfo): Promise<Account> {
    const accountInfo = { ...createInfo, authToken: 'abc123', accountRole: 'basic' };
    const createdAccount = new this.accountModel(accountInfo);
    return createdAccount;
    // return await createdAccount.save();
  }

  async findAll(): Promise<Account[]> {
    const accountList = [
      {
        username: 'user1',
        email: 'user1@email.com',
        inviteToken: 'inviteToken1',
        authToken: 'abc1',
        accountRole: 'basic'
      },
      {
        username: 'user1',
        email: 'user1@email.com',
        inviteToken: 'inviteToken2',
        authToken: 'abc2',
        accountRole: 'basic'
      }
    ];
    return new Promise((resolve, reject) => {
      resolve(accountList);
    });
    // return await this.accountModel.find().exec();
  }
}
