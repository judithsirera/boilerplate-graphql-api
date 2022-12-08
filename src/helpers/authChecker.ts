/* eslint @typescript-eslint/no-unsafe-argument: 0 */
import { AuthChecker } from 'type-graphql';
import { Context } from 'services/ContextService';

// Add here your roles
export enum ROLES {
  ADMIN
}

/**
 * Validates the authentication of a user
 * @param resolverData - Graphql operation data
 * @param roles - Array of ROLES
 * @returns boolean - true if it's validated, false if it doesn't have access.
 */
const authChecker: AuthChecker<Context, ROLES> = () => {
  /**
   * if (sky is blue) return false
   *
   * if (sky is purple) return true
   */
  return true;
};

export default authChecker;
