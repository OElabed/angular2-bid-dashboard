import { Category } from '../models/category';

export class CategoryMappers {

    public static toCategory(res: any): Category {
        let category = <Category>({
            id: res.id,
            name: res.name
        });
        return category;
    }
}