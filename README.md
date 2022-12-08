# Boilerplate Graphql Api

This is a boilerplate for a graphql API built with Apollo, and Prisma.

## Tech stack

- [Apollo Server v3 + Graphql + ExpressJS](https://www.apollographql.com/docs/apollo-server/v3)
- [TypeGraphql](https://typegraphql.com/)
- [Prisma](https://www.prisma.io/)

## Requirements

- Node v16
- Docker Compose

## Run server

1. Install dependencies

```
npm install
```

2. Start your database. This step is only required the first time.

```
docker compose up -d
```

3. Start server

```
npm run dev
```

You can access your server at http://localhost:4000/graphql

## Custom Database Setup

1. Set a **name** and a **port** to your database in the [`docker-compose.yml`](/docker-compose.yml) file.

   - Replace `boilerplate-graphql` to your database name.
   - Replace the port `33060` to your database port.

   - The current root password is `root`, but if you want to change it, assign a new password to `MYSQL_ROOT_PASSWORD`.
   - The current database is mapped to the docker volume `boilerplate-graphql-volume`. This is free to be changed by any other volume name.

2. Start your database. The `--force-recreate` is just needed in case you started your database previously and applied changes after.

```
docker compose up -d --force-recreate
```

3. Update `DATABASE_CONNECT_URL` environmental variable:

```
DATABASE_CONNECT_URL=mysql://root:{root_password}@localhost:{port}/{database_name}
```

4. Push your database architecture with [Prisma](https://www.prisma.io/docs/concepts/components/prisma-migrate)

```
npm run prisma:run
```

## Prisma

For more docs on prisma migration, check the prisma documentation [here](https://www.prisma.io/docs/concepts/components/prisma-migrate)

## Authorization

This boilerplate already integrates authentication middlewares based on `authChecker`. In order to change the authentication requirements, you need to write your logic in the [`helpers/authChecker.ts`](src/helpers/authChecker.ts) file.

For more documentation on custom authorization validator, you can check TypeGraphql [Authorization Docs](https://typegraphql.com/docs/authorization.html)

This boilerplate offers two decorators for checking authorization:

- `@AuthorizedOrNull`: Returns null if is not authenticated
- `@AuthorizedOrThrow`: Throws Error if is not authenticated

However, TypeGraphql also offers `@Authorized` decorator out of the box.
