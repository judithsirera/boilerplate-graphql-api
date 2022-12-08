import { PaginationArgs } from 'args/PaginationArgs';
import { Arg, Args, Query, Resolver } from 'type-graphql';
import PrismaService from 'services/PrismaService';
import { Service } from 'typedi';
import { Prisma } from '@prisma/client';
import { User } from 'models/User';
import { SortByArgs } from 'args/SortByArgs';

@Service()
@Resolver()
export class UsersResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => [User])
  async users(
    @Args() { take, skip }: PaginationArgs,
    @Args() { sort }: SortByArgs,
    @Arg('searchText', { nullable: true }) searchText?: string
  ): Promise<User[]> {
    let condition: Prisma.UserFindManyArgs['where'] = undefined;

    if (searchText) {
      const searchQuery: Prisma.StringFilter = { contains: searchText };
      condition = {
        OR: [{ firstName: searchQuery }, { lastName: searchQuery }]
      };
    }

    return this.prisma.user.findMany({
      where: condition,
      take,
      skip,
      orderBy: [{ firstName: sort }, { lastName: sort }]
    });
  }
}
