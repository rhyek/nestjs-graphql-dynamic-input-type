import { Args, Query, Resolver } from '@nestjs/graphql';
import { Item } from './item.object-type';
import { QueryInput } from './query.input-type';

@Resolver(() => Item)
export class ItemsResolver {
  @Query(() => [Item])
  items(@Args('query', { type: () => QueryInput }) item: QueryInput) {
    return null;
  }
}
