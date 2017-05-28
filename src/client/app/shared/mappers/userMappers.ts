import { User } from '../models/user';

import { MomentUtils } from '../utils/moment.utils';

export class UserMappers {

    public static toUser(res: any): User {
        let user = <User>({
            id: res.id,
            firstname: res.firstname,
            lastname: res.lastname
        });
        return user;
    }
}
