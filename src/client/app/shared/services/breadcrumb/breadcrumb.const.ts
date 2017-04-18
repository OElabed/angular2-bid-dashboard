import { MenuItem } from '../../models/breadcrumb';

export class BreadcrumbConst {

    public static readonly BREAD_CRUMB_HOME = <MenuItem>({
        label: 'Home',
        link: '/content/home'
    });

    public static readonly BREAD_CRUMB_LIVE_AUCTIONS = <MenuItem>({
        label: 'Live Auctions',
        link: '/content/live-auctions'
    });

    public static readonly BREAD_CRUMB_FEATURE_AUCTIONS = <MenuItem>({
        label: 'Feature Auctions',
        link: '/content/feature-auctions'
    });

}
