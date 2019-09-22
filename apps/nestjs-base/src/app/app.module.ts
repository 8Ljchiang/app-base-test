import { InviteTokenModule } from './Invite/invite-token.module';
import { Module } from '@nestjs/common';

import { AccountModule } from './account/account.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AccountModule,
    InviteTokenModule,
    // HelloWorldModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema'
    }),
    MongooseModule.forRoot('mongodb://localhost:32769/nxRestBase')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
