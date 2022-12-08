import { IsEnum, IsString, MinLength } from 'class-validator';
import { Sex } from 'enums/Sex';
import { Field, InputType } from 'type-graphql';

@InputType()
export class UserCreateInput {
  @IsString()
  @MinLength(3)
  @Field({ description: 'First name of the user' })
  firstName: string;

  @IsString()
  @MinLength(3)
  @Field({ description: 'Last name of the user' })
  lastName: string;

  @IsEnum(Sex)
  @Field(() => Sex, { nullable: true })
  sex: Sex;
}
