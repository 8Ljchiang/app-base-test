// import { FriendDto } from './create-account-response.dto';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class AccountDto {
  // @Field()
  // readonly authToken: string;
  // @Field()
  // readonly accountRole: string;
  @Field()
  readonly displayIdentifier: string;
  @Field()
  readonly email: string;
  @Field()
  readonly inviteToken: string;
  // @Field(() => Int)
  // readonly age: string;
}
