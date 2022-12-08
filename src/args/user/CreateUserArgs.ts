import { ValidateNested } from 'class-validator';
import { UserCreateInput } from 'inputs/UserCreateInput';
import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class CreateUserArgs {
  @ValidateNested()
  @Field(() => UserCreateInput)
  data: UserCreateInput;
}
