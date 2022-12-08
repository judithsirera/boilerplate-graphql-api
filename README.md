# Alltrana - Admin

The admin panel for Alltrana.

## Requirements

- Node v16
- Docker Compose

## Database setup

Start your db:

```
docker compose up -d
```

### Custom Database Setup

1. Set a **name** and a **port** to your database in the `docker-compose.yml` file.

   - Replace `boilerplate-graphql` to your database name.
   - Replace the port `33060` to your database port.

   - The current root password is `root`, but if you want to change it, assign a new password to `MYSQL_ROOT_PASSWORD`.
   - The current database is mapped to the docker volume `boilerplate-graphql-volume`. This is free to be changed by any other volume name.

2. Start your database. The `--force-recreate` is just needed in case you started your database previously and applied changes after.

```
docker compose up -d --force-recreate
```

3. Push your database architecture with [Prisma](https://www.prisma.io/docs/concepts/components/prisma-migrate)

```
npm run prisma:run
```

## Run the server

Start your development server by running:

```
npm run dev
```

You can access your server at http://localhost:4000/graphql

## Prisma

When prototyping in your local db, use the following command to push the changes to your local db.

```
prisma db push
```

Once changes are definitive, create a migration which will be added to the migration history

```
prisma migrate dev --name my_migration_name
```

and then run

```
npm run prisma:generate
```

For more docs, check the prisma documentation [here](https://www.prisma.io/docs/concepts/components/prisma-migrate)
