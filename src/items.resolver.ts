import { Args, Query, Resolver } from '@nestjs/graphql';
import { Item } from './item.object-type';
import { QueryInput } from './query.input-type';

@Resolver(() => Item)
export class ItemsResolver {
  @Query(() => [Item])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  items(@Args('query', { type: () => QueryInput }) _: any) {
    return null;
  }
}
