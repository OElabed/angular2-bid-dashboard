import { AuctionBid } from '../models/bid';

import { MomentUtils } from '../utils/moment.utils';

import { UserMappers } from './userMappers';

export class AuctionsMappers {

    public static toAuctionBid(res: any): AuctionBid {
        let auctionBid = <AuctionBid>({
            id: res.id,
            bid_id: res.bid_id,
            price_add: res.price_add,
            time_bid: MomentUtils.dateOnTimeFormat(res.time_bid),
            user: UserMappers.toUser(res.user)
        });
        console.debug('Parsed AuctionBid:', auctionBid);
        return auctionBid;
    }
}
