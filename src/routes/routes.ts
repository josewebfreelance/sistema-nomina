import {lazy} from "react";

const LazyAdministratorModule = lazy(() => import('../modules/administration/routes/AdministrationRoutes.tsx'))


export const routes = [
    {
        to: '/admin',
        path: '/admin/*',
        Component: LazyAdministratorModule,
    },
];
