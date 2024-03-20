import {lazy} from "react";
import {ADMIN_BASE_PATH} from "../util/constants.ts";

const LazyAdministratorModule = lazy(() => import('../modules/administration/routes/AdministrationRoutes.tsx'))

export const routes = [
    {
        to: ADMIN_BASE_PATH,
        path: `${ADMIN_BASE_PATH}/*`,
        Component: LazyAdministratorModule,
    }
];
