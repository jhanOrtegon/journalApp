import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { theme } from './'

export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}