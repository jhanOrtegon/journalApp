import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

const NavBar = ({ drawerWidth = 240 }) => {
    return (
        <AppBar
            position='fixed'
            sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    sx={{ display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid container
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Typography variant={'h6'} component={'div'} >JournalApp</Typography>
                    <IconButton sx={{ color: 'error.main' }}>
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar >
    )
}

export default NavBar