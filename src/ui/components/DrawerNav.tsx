import {Box, Drawer} from "@mui/material";
import {AppRouter} from "../../routes/AppRouter.tsx";
import {SideNav} from "../SideNav.tsx";
import {useAppSelector} from "../../store";

export const DrawerNav = ({drawerWidth = 270}) => {

    const {drawer} = useAppSelector((state) => state.sidenav);

    return (
        <Box sx={{display: 'flex', height: '100%'}}>
            <Box
                component={'nav'}
                sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
            >
                <Drawer variant={'permanent'}
                        sx={{
                            display: {xs: 'block'},
                            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: !drawer ? 0 : drawerWidth}
                        }}>
                    <SideNav/>
                </Drawer>

            </Box>

            <Box component={'main'} sx={{flexGrow: 1, p: 3, height: '100%'}}>
                <AppRouter/>
            </Box>
        </Box>
    );
}
