
import {PassivePage} from "../pages/PassivePage.tsx";
import {LogPage} from "../pages/LogPage.tsx";


export const routes = [
    {
        path: 'passive',
        to: 'passive',
        Component: PassivePage,
        name: 'PassivePage - Page'
    },
    {
        path: 'log',
        to: 'log',
        Component: LogPage,
        name: 'LogPage - Page'
    }
];
