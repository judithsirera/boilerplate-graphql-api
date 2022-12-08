/* eslint @typescript-eslint/no-unsafe-argument: 0 */
import { AuthChecker } from 'type-graphql';
import { Context } from 'services/ContextService';

export enum ROLES {
  ALLTRANA_ADMIN,
  AUTH_USER,
  TRAINING_CREATOR,
  INSTITUTION_ADMIN,
  PARTICIPANT,
  INVITED_PARTICIPANT
}

const authChecker: AuthChecker<Context, ROLES> = () => {
  return true;
};

export default authChecker;
