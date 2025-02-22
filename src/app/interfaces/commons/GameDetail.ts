import { Game } from "./Game";

export interface GameDetail extends Game{
    name_original: string,
    description: string,
    metacritic: number,
    background_image: string,
    background_image_additional?: string,
    released: string
}