import { Bid } from '../models/bid';
import { Product } from '../models/product';

import { ProductMappers } from './productMappers';

import { MomentUtils } from '../utils/moment.utils';

export class BidMappers {

    public static toBid(res: any): Bid {
        let bid = <Bid>({
            id: res.id,
            price_start: res.price_start,
            price_actu: res.price_actu,
            time_start: res.time_start,
            duration: res.duration,
            contrib: res.contrib,
            time_end: MomentUtils.counterFromNow(res.time_start, res.duration),
            watcher: res.watcher,
            product: ProductMappers.toProduct(res.product)

        });
        return bid;
    }


    public static toBidAllInfos(res: any): Bid {
        let bid = <Bid>({
            id: res.id,
            price_start: res.price_start,
            price_actu: res.price_actu,
            time_start: res.time_start,
            duration: res.duration,
            contrib: res.contrib,
            time_end: MomentUtils.counterFromNow(res.time_start, res.duration),
            watcher: res.watcher,
            product: ProductMappers.toProductAllInfos(res.product)

        });
        return bid;
    }

}
