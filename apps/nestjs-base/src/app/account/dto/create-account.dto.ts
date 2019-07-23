import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class CreateAccountDto {
  @Field()
  readonly authToken: string;
  @Field()
  readonly accountRole: string;
  @Field()
  readonly username: string;
  @Field()
  readonly email: string;
  @Field()
  readonly inviteToken: string;
  // @Field(() => Int)
  // readonly age: string;
}
