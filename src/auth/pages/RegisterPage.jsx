import { Google } from '@mui/icons-material'
import { Grid, TextField, Button, Typography, Link } from '@mui/material'
import { Link as ReactLink } from 'react-router-dom'
import React from 'react'
import LayouthAuth from './Layouth'

export const RegisterPage = () => {
    return (
        <LayouthAuth title={'Register'}>
            <form>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField
                            label={'Nombre Completo'}
                            type={'text'}
                            placeholder={'jhan ortegon'}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} marginTop={2}>
                        <TextField
                            label={'Correo Electronico'}
                            type={'email'}
                            placeholder={'jhanOrtegon@gmail.com'}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} marginTop={2}>
                        <TextField
                            label={'Contraseña'}
                            type={'password'}
                            placeholder={'******'}
                            fullWidth
                        />
                    </Grid>

                    <Grid container
                        spacing={2}
                        marginTop={2}
                    >
                        <Grid item xs={12}>
                            <Button
                                variant='contained'
                                fullWidth
                            >
                                Crear Cuenta
                            </Button>
                        </Grid>

                    </Grid>

                    <Grid container
                        justifyContent={'end'}
                        mt={2}
                    >
                        <Typography mr={1}>ya tienes cuenta? </Typography>
                        <Link
                            component={ReactLink} to={'/auth/login'}
                        >
                            ingresar
                        </Link>

                    </Grid>

                </Grid>
            </form>
        </LayouthAuth>
    )
}

