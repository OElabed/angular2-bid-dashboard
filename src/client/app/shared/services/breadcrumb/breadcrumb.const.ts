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

    public static readonly BREAD_CRUMB_DASHBOARD = <MenuItem>({
        label: 'Dashboard',
        link: '/content/dashboard'
    });

    public static readonly BREAD_CRUMB_CATEGORIES = <MenuItem>({
        label: 'Categories',
        link: '/content/categories'
    });

    public static readonly BREAD_CRUMB_CATEGORY = <MenuItem>({
        label: '',
        link: '/content/category'
    });

    public static breadcrumbItem(name: string, link: string, sublink: string): MenuItem {

        return <MenuItem>({
            label: name,
            link: BreadcrumbConst.concatLink([link, sublink])
        });
    }

    private static concatLink(sublink: string[]): string {
        return sublink.join('/');
    }

}
