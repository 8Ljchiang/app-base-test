import { CreateAccountDto } from './dto/create-account.dto';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from './interfaces/account.interface';
import { CreateAccountInfo } from './input/account.input';

// const friends: Friend[] = [
//   {
//     username: 'friend1',
//     email: 'user@email.com',
//     inviteToken: 'token'
//   },
//   {
//     username: 'friend2',
//     email: 'user@email.com',
//     inviteToken: 'token'
//   },
//   {
//     username: 'friend3',
//     email: 'user@email.com',
//     inviteToken: 'token'
//   }
// ];
@Injectable()
export class AccountService {
  constructor(
    // @InjectModel('Account') private readonly accountModel: Model<Account>
  ) {}

  // async create(createAccountDto: CreateAccountDto): Promise<Account> {
  async create(createInfo: CreateAccountInputDto): Promise<Account> {
    // const accountInfo = { ...createInfo, authToken: 'abc123', role: 'basic', friends };
    const accountInfo = { ...createInfo, authToken: 'abc123', role: 'basic' };
    return accountInfo;
    // const createdAccount = new this.accountModel(accountInfo);
    // return createdAccount;
    // return await createdAccount.save();
  }

  async findAll(): Promise<Account[]> {
    const accountList = [
      {
        username: 'user1',
        email: 'user1@email.com',
        // authToken: 'abc1',
        role: 'basic',
        // friends,
      },
      {
        username: 'user1',
        email: 'user1@email.com',
        inviteToken: 'inviteToken2',
        // authToken: 'abc2',
        role: 'basic',
        // friends
      }
    ];
    return new Promise((resolve, reject) => {
      resolve(accountList);
    });
    // return await this.accountModel.find().exec();
  }
}
