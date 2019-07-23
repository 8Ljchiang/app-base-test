import { CreateAccountDto } from './dto/create-account.dto';
import { Resolver, Query, Args, ResolveProperty, Parent, Mutation } from "@nestjs/graphql";
import { AccountService } from './account.service';
import { CreateAccountInfo } from './input/account.input';

@Resolver()
export class AccountResolver {
  constructor(
    private readonly accountService: AccountService
  ) {}

  @Query(() => String)
  async hello() {
    return 'world';
  }

  @Mutation(() => CreateAccountDto)
  async createAccount(@Args('input') input: CreateAccountInfo) {
    return this.accountService.create(input);
  }

  @Query(() => [CreateAccountDto])
  async listAccounts() {
    return this.accountService.findAll();
  }

  // @Query(returns => Account)
  // async author(@Args({ name: 'id', type: () => Int }) id: number) {
  //   return await this.accountService.findOneById(id);
  // }

  // @ResolveProperty()
  // async accounts(@Parent() account) {
  //   const { id } = account;
  //   return await this.postsService.findAll({ authorId: id });
  // }
}
