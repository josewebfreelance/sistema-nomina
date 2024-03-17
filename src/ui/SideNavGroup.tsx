import {Collapse, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {SideNavGroupInterface} from "../interfaces";
import {SideNavItem} from "./";
import {useAppDispatch, useAppSelector} from "../store";
import {setCollapsable} from "../store/ui/sidenav/sidenavSlice.ts";


export const SideNavGroup = ({moduleName, items}: SideNavGroupInterface) => {

    const { collapsable } =  useAppSelector((state) => state.sidenav);
    const dispatch = useAppDispatch();
    const handleCollapse = () => {
        dispatch(setCollapsable({ open: !collapsable }));
    };

    return (
        <List component={'nav'}>
            <ListItemButton onClick={handleCollapse}>
                <ListItemIcon>
                    {
                        collapsable
                            ? <ExpandLess sx={{color: 'white'}}/>
                            : <ExpandMore sx={{color: 'white'}}/>
                    }
                </ListItemIcon>
                <ListItemText primary={moduleName}/>
            </ListItemButton>

            <Collapse in={collapsable} timeout={'auto'} unmountOnExit>
                <List component={'div'}>
                    {
                        items.map((item) => (
                            <SideNavItem key={item.to} {...item} />
                        ))
                    }
                </List>
            </Collapse>
        </List>
    );
}
