import { Product } from './product';

export interface Bid {
    id: number;
    product: Product;
    price_actu: number;
    time_end: string;
    contrib: number;
}
