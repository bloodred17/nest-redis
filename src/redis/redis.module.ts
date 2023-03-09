import { DynamicModule, Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { RedisClientOptions } from '@redis/client/dist/lib/client';

@Module({})
export class RedisModule {
  static register(options: RedisClientOptions): DynamicModule {
    return {
      module: RedisModule,
      providers: [
        {
          provide: 'REDIS_OPTIONS',
          useValue: options,
        },
        RedisService,
      ],
      exports: [RedisService],
    };
  }
}
