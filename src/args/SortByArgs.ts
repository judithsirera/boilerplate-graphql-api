import { IsEnum } from 'class-validator';
import { SortOrder } from 'enums/SortOrder';
import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class SortByArgs {
  @IsEnum(SortOrder)
  @Field(() => SortOrder, { defaultValue: SortOrder.asc })
  sort: keyof typeof SortOrder;
}
