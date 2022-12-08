import PrismaClient from '@prisma/client';
import { Sex } from 'enums/Sex';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class User implements PrismaClient.User {
  @Field(() => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(() => Sex, { nullable: true })
  sex: keyof typeof Sex | null;
}
