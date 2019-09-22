import { ObjectType, Field } from 'type-graphql';
import { IsOptional } from 'class-validator';

@ObjectType()
export class CreateInviteTokenResponseDto {
  @Field()
  createdBy: string;

  @IsOptional()
  @Field({ nullable: true })
  assignedTo?: string;

  @Field()
  token: string;
}
