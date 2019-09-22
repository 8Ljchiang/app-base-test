import { InviteTokenResolver } from './invite-token.resolver';
import { InviteTokenService } from './invite-token.service';
import { InviteTokenSchema } from './interfaces/invite-token.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'InviteToken', schema: InviteTokenSchema },
    ]),
  ],
  controllers: [],
  providers: [InviteTokenResolver, InviteTokenService]
})
export class InviteTokenModule {}
