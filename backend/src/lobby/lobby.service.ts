import { Injectable } from '@nestjs/common';
import { Lobby } from './models/lobby.model'

@Injectable()
export class LobbyService {
    private lobbies: Lobby[] = [
        {id: 1,count: 15,},
        {id: 2,count: 0,}
    ];
    findFirstNotFullLobby(): Lobby {
        return this.lobbies.find(lobby => lobby.count < 15);
    }
}
