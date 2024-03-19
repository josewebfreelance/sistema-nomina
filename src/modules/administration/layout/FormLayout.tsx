import {Box, Grid} from "@mui/material";
import {TitleComponent} from "../components";



export const FormLayout = ({children, save = true}) => {
    return (
        <>
            <Grid
                container
                spacing={0}
                sx={{
                    backgroundColor: 'white',
                    borderRadius: 5,
                    p: 3
                }}
            >
                <Box>
                    <TitleComponent title={save ? 'Agregar': 'Editar'}/>
                </Box>
                <Box sx={{ width: '100%' }}>
                    {children}
                </Box>
            </Grid>
        </>
    )
}
