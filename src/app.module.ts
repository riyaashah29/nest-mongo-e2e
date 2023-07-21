import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    UsersModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    DatabaseModule,
    // MongooseModule.forRoot('mongodb+srv://riyaa:riyaa@cluster0.3oboonb.mongodb.net/nest-mongo')
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
