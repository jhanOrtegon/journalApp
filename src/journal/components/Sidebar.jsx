import { Box, Grid, Drawer, Typography, Toolbar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material'
import React from 'react'

export const Sidebar = ({ drawerWidth }) => {
    return (
        <Box
            component={'nav'}
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant='permanent'
                open
                sx={{ display: { xs: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}
            >
                <Toolbar>
                    <Typography variant='h6'>
                        Jhan Carlos Ortegon
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        ['enero', 'febrero', 'abril'].map((e, i) => (
                            <ListItem key={e} disablePadding>
                                <ListItemButton sx={{ overflowWrap: 'anywhere' }}>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={e} />
                                        <ListItemText secondary={'xxxxxxxdxxxxdddddddrrrrrrxxxxxxxdxxxxdddddddrrrrrr'} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}

