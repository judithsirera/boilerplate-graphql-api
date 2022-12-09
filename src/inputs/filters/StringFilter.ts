import { Prisma } from '@prisma/client';
import { IsString } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType('StringFilter')
export class StringFilter implements Prisma.StringNullableFilter {
  @IsString()
  @Field(() => String, { nullable: true })
  equals: string;

  @IsString({ each: true })
  @Field(() => [String], { nullable: true })
  in: string[];

  @IsString({ each: true })
  @Field(() => [String], { nullable: true })
  notIn: string[];

  @IsString()
  @Field(() => String, { nullable: true })
  contains: string;

  @IsString()
  @Field(() => String, { nullable: true })
  startsWith: string;

  @IsString()
  @Field(() => String, { nullable: true })
  endsWith: string;
}
