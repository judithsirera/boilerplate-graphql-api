import { Args, Mutation, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import PrismaService from 'services/PrismaService';
import { CreateUserArgs } from 'args/user/CreateUserArgs';
import { User } from 'models/User';

@Service()
@Resolver()
export class CreateUserResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Mutation(() => User)
  async createUser(@Args() { data }: CreateUserArgs): Promise<User> {
    return this.prisma.user.create({
      data: { firstName: data.firstName, lastName: data.lastName, sex: data.sex }
    });
  }
}
