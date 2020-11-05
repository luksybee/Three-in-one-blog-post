import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { PersonModule } from './person/person.module';
import { HobbyModule } from './hobby/hobby.module';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017/three-in-one-db'),
    MongooseModule.forRoot('mongodb+srv://abefe:1111111111@cluster0.9ezx3.mongodb.net/three-in-one?retryWrites=true&w=majority'),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
      debug: false,
    }),
    PersonModule,
    HobbyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
