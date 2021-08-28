import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LobbyResolver } from './lobby.resolver';
import { LobbyService } from './lobby.service';

@Module({
  imports: [
  GraphQLModule.forRoot({
    debug: true,
    playground: true,
    autoSchemaFile: true,
  }),],
  providers: [LobbyResolver, LobbyService]
})
export class LobbyModule {}
