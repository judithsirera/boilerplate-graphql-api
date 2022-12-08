import { IsNumber, IsPositive, Min } from 'class-validator';
import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export class PaginationArgs {
  @IsNumber()
  @Min(0)
  @Field(() => Int, { nullable: true })
  skip: number;

  @IsPositive()
  @Field(() => Int, { nullable: true })
  take: number;
}
