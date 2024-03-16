import {useNavigate} from "react-router-dom";
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {SidNavItemInterface} from "../interfaces";



export const SideNavItem = ({to, name, NavIcon}: SidNavItemInterface) => {

    const navigate = useNavigate();

    const onNavigate = () => {
        navigate(to);
    }

    return (
        <ListItemButton sx={{ pl: 6 }} onClick={onNavigate}>
            <ListItemIcon>
                <NavIcon sx={{color: 'primary.light'}}/>
            </ListItemIcon>
            <ListItemText sx={{color: 'primary.light'}} primary={name}/>
        </ListItemButton>
    );
}
