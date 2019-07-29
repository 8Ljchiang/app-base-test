import { ObjectType, Field } from 'type-graphql';
// import { Friend } from '../interfaces/account.interface';

@ObjectType()
export class FriendDto {
  @Field()
  readonly username: string;
  @Field()
  readonly email: string;
  @Field()
  readonly inviteToken: string;
}

@ObjectType()
export class CreateAccountResponseDto {
  @Field()
  readonly displayIdentifier: string;
  @Field()
  readonly authToken: string;
  @Field()
  readonly role: string;
  @Field()
  readonly inviteToken: string;
  // @Field(() => FriendDto)
  // readonly friends: FriendDto[];
  // @Field(() => Int)
  // readonly age: string;
}
