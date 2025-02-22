import { Shop } from "../commons/Shop";

export interface ResponseShopsList{
    count: number,
    next: any,
    previous: any,
    results: Shop[]
}