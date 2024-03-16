import {createTheme} from "@mui/material";


export const  mainTheme = createTheme({
   palette: {
       background: {
           default : '#f1f1f1'
       },
       primary: {
           main: '#001b40'
       }
   },
    components: {
       MuiDrawer: {
           styleOverrides: {
               paper: {
                   backgroundColor: '#001b40',
                   color: 'white'
               }
           }
       }
    }
});
