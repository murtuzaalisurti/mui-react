import { Box, Typography } from '@mui/material'

interface GreetProps {
    name: string,
    message?: string
}

const Greeter = ({ name, message }: GreetProps) => {
    return (
        <Box>
            {/* here the component will be "h1" but the variant will be "h3"
            which means that the element will look like "h5" but the tag will be "h1" */}
            <Typography variant="h3" component={"h1"}>Hello {name}</Typography>

            {/* here the tag will be "h6" and the styling will be of "h6" as well */}
            <Typography variant="h6">{message ? message : ''}</Typography>
        </Box>
    )
}

export default Greeter