import { Product, ProductInfos, Review } from '../models/product';
import { CategoryMappers } from './categoryMappers';

export class ProductMappers {

    public static toProduct(res: any): Product {
        let product = <Product>({
            id: res.id,
            name: res.name,
            img: res.img,
            price: res.price,
            category: res.category,
            description: res.description,
            reference: res.reference,
            stars: res.stars,
            comments: res.comments,
            new: res.new
        });
        return product;
    }

    public static toProductAllInfos(res: any): Product {
        let product = <Product>({
            id: res.id,
            name: res.name,
            img_thumbs: res.img_thumbs,
            infos: ProductMappers.toProductInfos(res.infos),
            price: res.price,
            description: res.description,
            reference: res.reference,
            category: res.category,
            stars: res.stars,
            comments: res.comments
        });
        return product;
    }

    public static toProductInfos(res: any): ProductInfos {
        let infos = <ProductInfos>({
            stock: res.stock,
            reviews: ProductMappers.mapReviews(res.reviews),
            category: CategoryMappers.toCategory(res.category)
        });
        return infos;
    }

    public static mapReviews(res: any): Review[] {
        return res.map(ProductMappers.toReview);
    }

    public static toReview(res: any): Review {
        let review = <Review>({
            name: res.name,
            stars: res.stars,
            img: res.img,
            message: res.message
        });
        return review;
    }

}
