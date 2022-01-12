import { Field, InputType } from '@nestjs/graphql';

function nestedDynamicInput() {
  const clsName = 'NestedInputType';
  const box = {
    [clsName]: class {},
  };
  const whereCls = box[clsName];
  Field(() => String)(whereCls.prototype, 'param2');
  InputType()(whereCls);
  return whereCls;
}

function DynamicInput() {
  return (prototype: any, property: string) => {
    const inputType = nestedDynamicInput();
    Field(() => inputType, { nullable: true })(prototype, property);
  };
}

@InputType()
export class QueryInput {
  @Field()
  param1: string;

  @DynamicInput()
  nested: any;
}
