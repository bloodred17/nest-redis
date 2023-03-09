import { Inject, Injectable } from '@nestjs/common';
import { createClient } from 'redis';
import { RedisClientOptions } from '@redis/client/dist/lib/client';

@Injectable()
export class RedisService {
  constructor(
    @Inject('REDIS_OPTIONS') private redisOptions: RedisClientOptions
  ) {}

  createClient(options?: RedisClientOptions) {
    return !!options ? createClient(options) : createClient(this.redisOptions);
  }
}
