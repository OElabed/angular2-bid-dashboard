import { Category } from './category';

export interface Product {
    id: number;
    name: string;
    img: string;
    img_thumbs: string[];
    infos: ProductInfos;
    price: number;
    category: number;
    description: string;
    reference: string;
    new: boolean;
    stars: number;
    comments: number;
}


export interface ProductInfos {
    stock: number;
    category: Category;
    reviews: Review[];
}

export interface Review {
    name: string;
    stars: number;
    img: string;
    message: string;
}
