import { ApolloServerPlugin } from 'apollo-server-plugin-base';
import { Context } from 'services/ContextService';

import { isProdEnvironment, isStageEnvironment } from 'utils/environment';
import {
  ApolloServerPluginLandingPageProductionDefault,
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageGraphQLPlayground
} from 'apollo-server-core';

const getApolloLandingPlugin = () => {
  if (isProdEnvironment()) {
    return ApolloServerPluginLandingPageProductionDefault();
  }
  if (isStageEnvironment()) {
    return ApolloServerPluginLandingPageGraphQLPlayground();
  }
  return ApolloServerPluginLandingPageLocalDefault({ embed: true });
};

const ApolloLandingPlugin: ApolloServerPlugin<Context> = getApolloLandingPlugin();

export default ApolloLandingPlugin;
