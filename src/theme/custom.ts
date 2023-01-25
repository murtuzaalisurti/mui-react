import { createTheme } from '@mui/material'
import { green } from '@mui/material/colors'

export default createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#CCC"
        },
        secondary: {
            main: green[200]
        }
    },
    spacing: 8
})