import { Box } from '@mui/material'
import NavBar from './../components/NavBar';

const JournalLayout = ({ children }) => {
    const drawerWidth = 240
    return (
        <Box display={'flex'}>

            <NavBar drawerWidth={drawerWidth} />

            {/* Sidebar */}

            <Box component='main' sx={{ flexGrow: '1', p: 3 }}>
                {children}
            </Box>

        </Box>
    )
}

export default JournalLayout