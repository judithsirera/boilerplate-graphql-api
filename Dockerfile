FROM node:16

ARG database_connect_url="mysql://root:root@localhost:3306/boilerplate-graphql"

ENV DATABASE_CONNECT_URL=$database_connect_url

ENV PORT 4000

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Installing dependencies
COPY package*.json ./
RUN npm install


# Copying source files
COPY prisma/ ./prisma 
COPY src ./src
COPY tsconfig.json ./tsconfig.json

# Generate Prisma Client
RUN npm run prisma:generate

# Building app
RUN npm run build
EXPOSE 4000

# Running the app
CMD "npm" "run" "start:migrate:prod"