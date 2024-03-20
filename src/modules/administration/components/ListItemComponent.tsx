import {Avatar, IconButton, ListItem, ListItemText} from "@mui/material";
import {Delete} from "@mui/icons-material";

interface Props {
    itemCode: string | number;
    itemPrimaryText: string;
    itemSecondaryText: string;
    deleteAction?: () => void;
}

export const ListItemComponent = ({itemCode, itemPrimaryText, itemSecondaryText, deleteAction}: Props) => {
    return (
        <ListItem
            sx={{
                pt: 0.5,
                pr: 0,
                pb: 1,
                pl: 0.3
            }}
            key={itemCode}
            secondaryAction={
                <IconButton onClick={deleteAction} className={'list-button'}>
                    <Avatar size={'small'}>
                        <Delete/>
                    </Avatar>
                </IconButton>
            }
        >
            <ListItemText primary={itemPrimaryText} secondary={itemSecondaryText}/>
        </ListItem>
    )
}
