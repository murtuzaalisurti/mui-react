import { PaletteMode } from '@mui/material'
import { blue, green, red, yellow } from '@mui/material/colors'

export const customThemeObj = (mode: PaletteMode) => {
    /**
    * ! default theme object https://mui.com/material-ui/customization/default-theme/#main-content
    * ? for fontsizes refer to https://mui.com/material-ui/customization/typography/#font-size
    * ? for all variants refer to https://mui.com/material-ui/customization/typography/#variants
    * */
    return {
        palette: {
            mode,
            // ...(mode === "light" ? {
            //     primary: {
            //         main: "#000",
            //     },
            //     secondary: {
            //         main: blue[200]
            //     },
            // } : {
            //     primary: {
            //         main: red[300]
            //     },
            //     secondary: {
            //         main: green[200]
            //     }
            // }),
            contrastThreshold: 4.5
        }
    }
}