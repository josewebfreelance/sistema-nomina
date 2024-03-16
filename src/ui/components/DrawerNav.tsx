import {Box, Drawer} from "@mui/material";
import {AppRouter} from "../../routes/AppRouter.tsx";
import {SideNav} from "../SideNav.tsx";

export const DrawerNav = ({drawerWidth = 270}) => {
    return (
        <Box sx={{display: 'flex'}}>
            <Box
                component={'nav'}
                sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
            >
                <Drawer variant={'permanent'} open
                        sx={{
                            display: {xs: 'block'},
                            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
                        }}>
                    <SideNav/>
                </Drawer>

            </Box>

            <Box component={'main'} sx={{flexGrow: 1, p: 3}}>
                <AppRouter />
            </Box>
        </Box>
    );
}
