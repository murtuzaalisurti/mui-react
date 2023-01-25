import React from 'react'
import { Box, Grid, Paper, Typography, Rating, createTheme } from '@mui/material'
import { AccessTimeFilled } from '@mui/icons-material'

const Card = () => {
    return (
        <Grid item xs={3}>
            <Paper elevation={3} sx={{
                overflow: 'hidden'
            }}>
                <img src="https://source.unsplash.com/random/1920x1080/?wallpaper,landscape" alt="" />
                <Box paddingX={1}>
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
                    <Rating sx={{
                        marginTop: '0.5rem'
                    }} value={4.5} precision={0.5} readOnly />
                </Box>
            </Paper>
        </Grid>
    )
}

export default Card