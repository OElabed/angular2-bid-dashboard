import { Product } from './product';

export interface Bid {
    id: number;
    product: Product;
    price_actu: number;
    price_start: number;
    time_start: string;
    time_end: Counter;
    contrib: number;
    watcher: number;
}

export interface Counter {
    hours: number;
    minutes: number;
    seconds: number;
}
