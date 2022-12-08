import { User } from 'models/User';
import { FieldResolver, Resolver, Root } from 'type-graphql';

import { Service } from 'typedi';
import { AuthorizedOrThrow } from 'helpers/middlewares/AuthorizedOrThrow';

@Service()
@Resolver(() => User)
export class FullNameResolver {
  @AuthorizedOrThrow()
  @FieldResolver(() => String)
  fullName(@Root() user: User): string {
    return `${user.firstName} ${user.lastName}`;
  }
}
