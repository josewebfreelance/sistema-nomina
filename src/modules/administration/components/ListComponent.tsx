import {Box, IconButton, InputAdornment, List, Pagination, TextField} from "@mui/material";
import {ListItemComponent} from "./ListItemComponent.tsx";
import {Search} from "@mui/icons-material";


interface Items {
    itemCode: string | number;
    itemPrimaryText: string;
    itemSecondaryText: string;
    deleteAction?: () => void;
}

interface Props {
    searchLabel?: string;
    searchPlaceholder?: string;
    items: Items[]
}


export const ListComponent = ({searchLabel, searchPlaceholder = 'Buscar', items}: Props) => {
    return (
        <Box fullWidth sx={{backgroundColor: 'primary.light'}} className={'list-content'}>
            <Box sx={{height: 'calc(100vh - (56px + 17px + 48px))'}}>
                <TextField
                    label={searchLabel}
                    variant="outlined"
                    placeholder={searchPlaceholder}
                    sx={{ mt: 1 }}
                    fullWidth
                    InputProps={{
                        style: {
                            borderRadius: "100px",
                            backgroundColor: 'white'
                        },
                        endAdornment: (
                            <InputAdornment position='end'>
                                <IconButton>
                                    <Search sx={{color: 'primary.main'}}/>
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />

                <List sx={{width: '100%'}}>
                    {
                        items.map((value) => <ListItemComponent key={value.itemCode} {...value} />)
                    }
                </List>
            </Box>

            <Box>
                <Pagination
                    count={10}
                    color="primary"
                    sx={{
                        mt: 1,
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'end',
                    }}
                />
            </Box>
        </Box>
    )
}
