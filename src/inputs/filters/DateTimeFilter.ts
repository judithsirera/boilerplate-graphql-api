import { IsDate } from 'class-validator';
import { Field, GraphQLISODateTime, InputType } from 'type-graphql';

@InputType('DateTimeFilter')
export class DateTimeFilter {
  @IsDate()
  @Field(() => GraphQLISODateTime, { nullable: true })
  beforeOrEquals: Date;

  @IsDate()
  @Field(() => GraphQLISODateTime, { nullable: true })
  before: Date;

  @IsDate()
  @Field(() => GraphQLISODateTime, { nullable: true })
  after: Date;

  @IsDate()
  @Field(() => GraphQLISODateTime, { nullable: true })
  afterOrEquals: Date;

  @IsDate()
  @Field(() => GraphQLISODateTime, { nullable: true })
  equals: Date;
}
