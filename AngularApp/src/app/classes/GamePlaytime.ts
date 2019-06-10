import { Game } from './Game'
import { User } from './User'
export interface GamePlaytime {
    game: Game;
    playtime: number;
    ratio: string;
}

export interface UserGPs {
    user: User;
    gamePlaytimes: GamePlaytime[];
}