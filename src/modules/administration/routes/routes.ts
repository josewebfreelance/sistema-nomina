import {LogPage, PassivePage} from "../pages";


export const routes = [
    {
        path: 'passive',
        to: 'passive',
        Component: PassivePage,
        name: 'PassivePage'
    },
    {
        path: 'log',
        to: 'log',
        Component: LogPage,
        name: 'LogPage'
    }
];
