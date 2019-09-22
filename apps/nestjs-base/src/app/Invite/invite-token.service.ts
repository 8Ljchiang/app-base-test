import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InviteToken } from './interfaces/invite-token.interface';

@Injectable()
export class InviteTokenService {
  constructor(
    @InjectModel('InviteToken') private readonly inviteTokenModel: Model<InviteToken>
  ) {}

  async create(userId: string): Promise<InviteToken> {
    const newInviteToken = { createdBy: userId, token: 'new-token' };
    // const newInviteToken = { token: 'new-token' }
    return new Promise((resolve, reject) => {
      resolve(newInviteToken);
    });
  }

}
