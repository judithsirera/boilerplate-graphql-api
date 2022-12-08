import 'reflect-metadata';
import 'enums';
import express from 'express';

import { express as voyagerMiddleware } from 'graphql-voyager/middleware';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import http from 'http';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';

import Container from 'typedi';
import getSchema from 'server/schema';
import { useContainer } from 'class-validator';
import { isProdEnvironment } from 'utils/environment';
import ApolloLandingPlugin from './ApolloLandingPlugin';
import ContextService from 'services/ContextService';

const API_PATH = '/graphql';
const PORT = process.env.PORT || 4000;

useContainer(Container, { fallback: true, fallbackOnErrors: true });

async function run() {
  const app = express();

  const httpServer = http.createServer(app);

  // Creating the WebSocket server
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: API_PATH
  });

  const schema = await getSchema();

  const serverCleanup = useServer({ schema }, wsServer);

  const server = new ApolloServer({
    introspection: !isProdEnvironment(),
    context: ({ req }) => {
      return ContextService.instance().get(req);
    },
    schema,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        serverWillStart: async () => ({
          drainServer: async () => {
            await serverCleanup.dispose();
          }
        })
      },
      ApolloLandingPlugin
    ]
  });

  await server.start();

  app.use('/voyager', voyagerMiddleware({ endpointUrl: API_PATH }));

  server.applyMiddleware({
    app,
    path: API_PATH,
    cors: {
      origin: [`http://localhost:${PORT}`]
    }
  });

  httpServer.listen({ port: PORT });

  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
}

run();
