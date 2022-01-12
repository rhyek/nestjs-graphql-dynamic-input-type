import path from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ItemsResolver } from './items.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [ItemsResolver],
})
export class AppModule {}
