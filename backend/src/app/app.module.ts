import { CACHE_MANAGER, CacheModule, Inject, Module, OnModuleDestroy } from '@nestjs/common';
import * as redisStore from 'cache-manager-ioredis';
import { Cache } from 'cache-manager'

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Redis } from 'ioredis';

@Module({
    imports: [
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
    controllers: [
        AppController,
    ],
    providers: [
        AppService,
    ],
})
export class AppModule {}