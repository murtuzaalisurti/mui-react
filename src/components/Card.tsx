import React from 'react'
import { Box, Grid, Card, Paper, Typography, Rating, createTheme, CardHeader, Avatar, CardMedia, CardContent } from '@mui/material'
import { AccessTimeFilled } from '@mui/icons-material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

const ReviewCard = ({color, imgUrl}: {color: string, imgUrl: string}) => {
    return (
        <Grid2 xs={12} md={6} lg={4}>
            {/* https://mui.com/material-ui/react-card/ */}
            <Card variant="outlined" sx={{
                overflow: 'hidden'
            }}>
                <CardHeader avatar={
                    <Avatar>A</Avatar>
                }>
                    header
                </CardHeader>
                <CardMedia image={imgUrl} component={"img"} alt='' />
                {/* <img src={imgUrl} alt="" /> */}
                <CardContent>
                    <Typography variant="h6" component={'h6'}>
                        Nature
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5
                    }}>
                        <AccessTimeFilled sx={{
                            width: '1rem'
                        }} />
                        <Typography variant="body2" component={'p'} sx={{
                            textAlign: 'center'
                        }}>
                            5 hours
                        </Typography>
                    </Box>
                    {/* <Rating sx={{
                        marginTop: '0.5rem'
                    }} value={4.5} precision={0.5} readOnly /> */}
                </CardContent>
            </Card>
        </Grid2>
    )
}

export default ReviewCard