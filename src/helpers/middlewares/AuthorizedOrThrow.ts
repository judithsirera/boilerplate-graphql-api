import { ForbiddenError } from 'apollo-server-core';
import { Context } from 'services/ContextService';
import { NextFn, ResolverData, UseMiddleware } from 'type-graphql';
import authChecker, { ROLES } from 'helpers/authChecker';

export const AuthorizedOrThrow = (...roles: ROLES[]) => {
  return UseMiddleware(async (resolverData: ResolverData<Context>, next: NextFn) => {
    const isAuthorized = await authChecker(resolverData, roles);

    if (isAuthorized) return next();
    else {
      throw new ForbiddenError('Permission required');
    }
  });
};
