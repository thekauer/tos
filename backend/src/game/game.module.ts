import { CacheModule, Module } from '@nestjs/common';
import { GameService } from './game.service';
import * as redisStore from 'cache-manager-ioredis';
import { GraphQLModule } from '@nestjs/graphql';
import { Context } from 'graphql-ws';

@Module({
    imports: [
        GraphQLModule.forRoot({
            subscriptions: {
              'graphql-ws': {
                onConnect: (context: Context<any>) => {
                    const { connectionParams } = context;
                  },
              }
            },
          }as any),
        CacheModule.registerAsync({
            useFactory: () => {
                return {
                    store: redisStore,
                    host: 'localhost',
                    port: 6379,
                }
            },
        }),
    ],
    controllers: [],
    providers: [GameService],
})
export class GameModule {}
