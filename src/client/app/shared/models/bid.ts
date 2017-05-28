import { Product } from './product';
import { User } from './user';
import { Counter } from './timer';

export interface Bid {
    id: number;
    product: Product;
    price_start: number;
    price_actu: number;
    time_start: string;
    time_end: Counter;
    contrib: number;
    watcher: number;
    duration: number;
    actions: AuctionBid;
}

export interface AuctionBid {
    id: number;
    order: number;
    bid_id: number;
    user: User;
    time_bid: string;
    price_add: number;
    price_actu: number;
}
