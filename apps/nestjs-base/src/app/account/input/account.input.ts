import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateAccountInput {
  @Field()
  readonly username: string;
  @Field()
  readonly email: string;
  @Field()
  readonly password: string;
  // @Field()
  // readonly inviteToken: string;
}
