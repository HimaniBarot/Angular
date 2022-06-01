export class NavItems {
    public icon: string;
    public navLink: string;
    public routePath: string;

    constructor(
        icon: string,
        navLink: string,
        routePath: string
    ) {
        this.icon = icon;
        this.navLink = navLink;
        this.routePath = routePath;
    }
}