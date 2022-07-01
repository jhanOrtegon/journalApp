import { Box, Toolbar } from '@mui/material'
import { NavBar, Sidebar } from '../components';

const JournalLayout = ({ children }) => {

    const drawerWidth = 240

    return (
        <Box display={'flex'}>

            <Sidebar drawerWidth={drawerWidth} />

            <NavBar drawerWidth={drawerWidth} />


            <Box component='main' sx={{ flexGrow: '1', p: 3 }}>
                <Toolbar />
                {children}
            </Box>

        </Box>
    )
}

export default JournalLayout