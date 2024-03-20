import {Collapse, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {SideNavGroupInterface} from "../interfaces";
import {SideNavItem} from "./";
import {useState} from "react";


export const SideNavGroup = ({moduleName, items}: SideNavGroupInterface) => {

    const [collapsable, setLocalCollapsable] = useState(false);

    const handleCollapse = () => {
        setLocalCollapsable(prevState => !prevState)
    };

    return (
        <List component={'nav'} sx={{
            backgroundColor: 'rgb(255,255,255, 0.1)',
            borderRadius: 5,
            m: 1
        }}>
            <ListItemButton sx={{display: 'flex'}} onClick={handleCollapse} disableRipple>
                <ListItemText primary={moduleName}/>
                <ListItemIcon sx={{justifyContent: 'end'}}>
                    {
                        collapsable
                            ? <ExpandLess sx={{color: 'white'}}/>
                            : <ExpandMore sx={{color: 'white'}}/>
                    }
                </ListItemIcon>
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
