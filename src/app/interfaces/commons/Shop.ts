import { Game } from "./Game";

export interface Shop{
    id: string,
    name: string,
    domain: string,
    slug: string,
    games_count: number,
    image_background: string,
    games: Game[]
}