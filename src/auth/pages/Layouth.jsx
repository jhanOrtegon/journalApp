import { Grid, Typography } from '@mui/material'
import React from 'react'

const LayouthAuth = ({ children, title }) => {
    return (
        <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main' }}
        >
            <Grid item
                className='box-shadow'
                sx={{ padding: 3, borderRadius: 2, backgroundColor: 'white', width: { sm: 450 } }}
            >
                <Typography variant='h5' sx={{ mb: 2 }}>
                    {title}
                </Typography>
                {children}
            </Grid>
        </Grid>

    )
}

export default LayouthAuth