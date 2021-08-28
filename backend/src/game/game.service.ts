import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class GameService {
    constructor(
        @Inject(CACHE_MANAGER) private readonly cache: Cache,
    ) {}
    
}
