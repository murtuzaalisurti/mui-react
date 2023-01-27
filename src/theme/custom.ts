import { PaletteMode } from '@mui/material'
import { blue, green, red, yellow } from '@mui/material/colors'

export const customThemeObj = (mode: PaletteMode) => {
    return {
        palette: {
            mode,
            ...(mode === "light" ? {
                primary: {
                    main: yellow[300],
                    dark: yellow['A700']
                },
                secondary: {
                    main: blue[200]
                },
            } : {
                primary: {
                    main: red[300]
                },
                secondary: {
                    main: green[200]
                }
            }),
            contrastThreshold: 4.5
        }
    }
}