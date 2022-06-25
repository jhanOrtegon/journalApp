import { Google } from '@mui/icons-material'
import { Grid, Typography, TextField, Button, Link } from '@mui/material'
import { Link as ReactLink } from 'react-router-dom';
import React from 'react'
import LayouthAuth from './Layouth';

export const LoginPage = () => {
    return (
        <LayouthAuth title={'Login'}>
            <form>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField
                            label={'Correo Electronico'}
                            type={'email'}
                            placeholder={'Correo@gmail.com'}
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
                        <Grid item
                            xs={12}
                            sm={6}
                        >
                            <Button
                                variant='contained'
                                fullWidth
                            >
                                Login
                            </Button>
                        </Grid>

                        <Grid item
                            xs={12}
                            sm={6}
                        >
                            <Button
                                variant='contained'
                                fullWidth
                            >
                                <Google />
                                <Typography ml={1}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container
                        justifyContent={'end'}
                        mt={2}
                    >
                        <Link
                            component={ReactLink} to={'/auth/register'}
                        >
                            Registrate
                        </Link>

                    </Grid>

                </Grid>
            </form>
        </LayouthAuth>
    )
}