import { PaletteMode, ThemeOptions, createTheme } from '@mui/material'
import { blue, green, red, yellow } from '@mui/material/colors'
import { TthemeState } from '../context/themeContext'

export const customThemeObj = (mode: PaletteMode) => {
    return {
        palette: {
            mode,
            ...(mode === "light" ? {
                primary: {
                    main: yellow[300]
                },
                secondary: {
                    main: blue[200]
                }
            } : {
                primary: {
                    main: red[300]
                },
                secondary: {
                    main: green[200]
                }
            })
        }
    }
}

// export default createTheme({
//     palette: {
//         mode: "dark",
//         primary: {
//             main: "#CCC"
//         },
//         secondary: {
//             main: green[200]
//         }
//     },
//     spacing: 8 //default - 8px
// })