import { Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { LobbyService } from './lobby.service';
import { Lobby } from './models/lobby.model';

@Resolver((of) => Lobby)
export class LobbyResolver {
    constructor(private readonly lobbyService: LobbyService) {}
    @Query((returns) => Lobby)
    join() : Lobby {
        return this.lobbyService.findFirstNotFullLobby();
    }
}
