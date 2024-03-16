import {useState} from "react";
import {Collapse, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {SideNavGroupInterface} from "../interfaces";
import {SideNavItem} from "./";


export const SideNavGroup = ({moduleName, items}: SideNavGroupInterface) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List component={'nav'}>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    {
                        open
                            ? <ExpandLess sx={{color: 'white'}}/>
                            : <ExpandMore sx={{color: 'white'}}/>
                    }
                </ListItemIcon>
                <ListItemText primary={moduleName}/>
            </ListItemButton>

            <Collapse in={open} timeout={'auto'} unmountOnExit>
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
