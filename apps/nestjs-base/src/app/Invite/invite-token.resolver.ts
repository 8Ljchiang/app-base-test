import { CreateInviteTokenResponseDto } from './dto/create-invite-token-response.dto';
import { InviteTokenService } from './invite-token.service';
import { Resolver, Query, Args, ResolveProperty, Parent, Mutation } from "@nestjs/graphql";

@Resolver()
export class InviteTokenResolver {
  constructor(
    private readonly inviteTokenService: InviteTokenService
  ) {}

  @Query(() => String)
  async inviteTokenTest() {
    return 'token';
  }

  @Mutation(() => CreateInviteTokenResponseDto)
  async createInviteToken() {
    const userId = 'test-user-id';
    // return { createdBy: 'someone', token: 'token' }
    return await this.inviteTokenService.create(userId);
  }
}
