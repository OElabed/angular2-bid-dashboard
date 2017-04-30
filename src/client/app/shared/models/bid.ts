import { Product } from './product';

export interface Bid {
    id: number;
    product: Product;
    price_actu: number;
    price_start: number;
    time_start: string;
    time_end: string;
    contrib: number;
    watcher: number;
}
