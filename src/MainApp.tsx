import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import {routes} from "./routes/routes.ts";
import {Box, CSSObject, Drawer, styled, Theme} from "@mui/material";
import {SideNav} from "./modules/shared/Sidenav.tsx";
import {Suspense} from "react";
import MuiDrawer from '@mui/material/Drawer';

export const MainApp = () => {

    const drawerWidth = 240;

    const DrawerHeader = styled('div')(({theme}) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));

    const openedMixin = (theme: Theme): CSSObject => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
    });

    const closedMixin = (theme: Theme): CSSObject => ({
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
            width: `calc(${theme.spacing(8)} + 1px)`,
        },
    });

    const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
        ({theme, open}) => ({
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            ...(open && {
                ...openedMixin(theme),
                '& .MuiDrawer-paper': openedMixin(theme),
            }),
            ...(!open && {
                ...closedMixin(theme),
                '& .MuiDrawer-paper': closedMixin(theme),
            }),
        }),
    );

    return (
        <Suspense fallback={<></>}>
            <BrowserRouter>
                <Box sx={{display: 'flex'}}>
                    <Box component={'nav'}
                         sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}>
                        <Drawer variant={'permanent'} open
                                sx={{
                                    display: {xs: 'block'},
                                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
                        }}>
                            <SideNav/>
                        </Drawer>
                    </Box>
                    <Box component={'main'} sx={{flexGrow: 1, p: 3}}>
                        <Box>
                            <Outlet/>
                            <Routes>
                                {
                                    routes.map(({path, Component}) => (
                                        <Route
                                            key={path}
                                            path={path}
                                            element={<Component/>}
                                        />
                                    ))
                                }
                            </Routes>
                        </Box>
                    </Box>

                </Box>

            </BrowserRouter>
        </Suspense>
    )
}
