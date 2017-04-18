
export interface MenuItem {
    label: string;
    link: string;
    active: boolean;
}

export interface Breadcrumb {
    menu: MenuItem;
    active: boolean;
}
