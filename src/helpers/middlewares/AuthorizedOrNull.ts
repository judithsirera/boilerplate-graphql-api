import { Context } from 'services/ContextService';
import { NextFn, ResolverData, UseMiddleware } from 'type-graphql';
import authChecker, { ROLES } from 'utils/authChecker';

export function AuthorizedOrNull(...roles: ROLES[]) {
  return UseMiddleware(async (resolverData: ResolverData<Context>, next: NextFn) => {
    const isAuthorized = await authChecker(resolverData, roles);

    if (isAuthorized) return next();
    return null;
  });
}
