import {NavLink} from "react-router-dom";
import '../../styles/SideNav.scss';
import {Avatar, Collapse, List, ListItemButton, ListItemIcon, ListItemText, useTheme} from "@mui/material";
import React from "react";
import {ExpandLess, ExpandMore, FactCheck, StarBorder, Work} from "@mui/icons-material";

export const SideNav = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <nav className="sidenav">
            <List component={'nav'}>

                <ListItemButton onClick={handleClick}>
                    <ListItemIcon className={'list-item-icon'}>
                        {open ? <ExpandLess /> : <ExpandMore/>}
                    </ListItemIcon>
                    <ListItemText primary="Inbox"/>
                </ListItemButton>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>

                        <NavLink
                            to={'/admin/passive'}
                            className={({isActive}) => isActive ? 'nav-active' : ''}>
                            <ListItemButton sx={{pl: 4}}>
                                <ListItemIcon>
                                    <Work sx={{
                                        color: 'white'
                                    }}/>
                                </ListItemIcon>

                                <ListItemText className={'text-link'} primary="Passive"/>
                            </ListItemButton>
                        </NavLink>

                        <NavLink
                            to={'/admin/log'}
                            className={({isActive}) => isActive ? 'nav-active' : ''}>
                            <ListItemButton sx={{pl: 4}}>
                                <ListItemIcon>
                                    <FactCheck sx={{
                                        color: 'white'
                                    }}/>
                                </ListItemIcon>

                                <ListItemText className={'text-link'} primary="Consulta"/>
                            </ListItemButton>
                        </NavLink>
                    </List>
                </Collapse>

            </List>
        </nav>
    );
}
