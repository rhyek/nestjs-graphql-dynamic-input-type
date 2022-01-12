import { Field, InputType } from '@nestjs/graphql';

function nestedDynamicInput() {
  const clsName = 'SomeName';
  const box = {
    [clsName]: class {},
  };
  const whereCls = box[clsName];
  Field(() => String)(whereCls.prototype, 'param2');
  InputType()(whereCls);
  return whereCls;
}

@InputType()
export class QueryInput {
  @Field()
  param1: string;

  @Field(() => nestedDynamicInput(), { nullable: true })
  nested: any;
}
