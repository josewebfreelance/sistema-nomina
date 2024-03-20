import {SvgIconComponent} from "@mui/icons-material";

export type SideNavType = SideNavGroupInterface[]

export interface SideNavGroupInterface {
    moduleName: string;
    items: SidNavItemInterface[]
}

export interface SidNavItemInterface {
    to: string;
    name: string;
    NavIcon: SvgIconComponent;
}
