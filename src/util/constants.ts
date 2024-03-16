import {SideNavType} from "../interfaces";
import {FactCheck, Work} from "@mui/icons-material";


export const ADMIN_BASE_PATH = '/admin';


export const NAVBAR_ROUTES: SideNavType = [
    {
        moduleName: 'Catalogos',
        items: [
            {
                to: `${ADMIN_BASE_PATH}/passive`,
                name: 'PassivePage',
                NavIcon: Work
            },
            {
                to: `${ADMIN_BASE_PATH}/log`,
                name: 'LogPage',
                NavIcon: FactCheck
            }
        ]
    }
];
