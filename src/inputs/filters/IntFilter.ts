import { Prisma } from '@prisma/client';
import { IsInt } from 'class-validator';
import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class IntFilter implements Prisma.NestedIntFilter {
  @IsInt()
  @Field(() => Int, { nullable: true })
  equals: number;

  @IsInt({ each: true })
  @Field(() => [Int], { nullable: true })
  in: number[];

  @IsInt({ each: true })
  @Field(() => [Int], { nullable: true })
  notIn: number[];

  @IsInt()
  @Field(() => Int, { nullable: true, description: 'less than' })
  lt: number;

  @IsInt()
  @Field(() => Int, { nullable: true, description: 'less than or equal' })
  lte: number;

  @IsInt()
  @Field(() => Int, { nullable: true, description: 'greater than' })
  gt: number;

  @IsInt()
  @Field(() => Int, { nullable: true, description: 'greater than or equal' })
  gte: number;
}
