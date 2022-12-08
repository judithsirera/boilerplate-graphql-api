import { buildSchema, BuildSchemaOptions } from 'type-graphql';
import Container from 'typedi';
import authChecker from 'helpers/authChecker';
import { ScalarsTypeMap } from 'type-graphql/dist/schema/build-context';

const scalars: ScalarsTypeMap[] = [];

const getSchema = () => {
  const options: BuildSchemaOptions = {
    resolvers: [__dirname + '/../**/*.resolver.ts'],
    orphanedTypes: [],
    validate: {
      enableDebugMessages: false,
      skipMissingProperties: true,
      whitelist: false,
      validationError: {
        target: false,
        value: true
      },
      skipNullProperties: true,
      skipUndefinedProperties: true,
      forbidUnknownValues: true
    },
    authChecker,
    dateScalarMode: 'isoDate', // "timestamp" or "isoDate",
    scalarsMap: scalars,
    nullableByDefault: false,
    authMode: 'null',
    emitSchemaFile: './snapshots/schema.graphql',
    globalMiddlewares: [],
    container: Container
  };

  return buildSchema(options);
};

export default getSchema;
