import { registerEnumType } from 'type-graphql';
import { Sex } from './Sex';
import { SortOrder } from './SortOrder';

registerEnumType(Sex, {
  name: 'Sex',
  description: undefined,
  valuesConfig: {
    F: {
      description: 'Female'
    },
    M: {
      description: 'Male'
    },
    NB: {
      description: ' Non binary'
    }
  }
});

registerEnumType(SortOrder, {
  name: 'SortOrder',
  description: undefined
});
