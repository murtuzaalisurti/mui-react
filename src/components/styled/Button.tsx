import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'

const StyledButton = styled(Button)(({theme}) => {
    return `
        color: ${theme.palette.primary.main};
        background-color: ${theme.palette.secondary.main};
    `
}) as typeof Button

export default StyledButton