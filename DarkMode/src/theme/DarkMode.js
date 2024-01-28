import {createTheme} from '@mui/material/styles'
import { grey, blueGrey } from '@mui/material/colors';

export const createCustomTheme =(darkmode) => createTheme({
    palette: {
        mode: darkmode ? 'dark' : 'light',
        primary: darkmode ? grey : blueGrey,
        secondary: grey
    }

})