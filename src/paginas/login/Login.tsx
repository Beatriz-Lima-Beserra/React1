import {Grid, TextField, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import {Link} from 'react-router-dom';
import React from 'react';
import './Login.css';

function Login (){
    return(
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid xs={6} alignItems='center'>
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{fontWeight:'bold'}}>Entrar</Typography>
                        <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth /> 
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <button type='submit' variant='contained' color='primary'>
                                    Logar
                                </button>
                            </Link>
                        </Box>


                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                            <Typography variant='subtitle1' gutterBottom align='center' style={{fontWeight: 'bold'}}>Cadastre-se</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6}>
                backgroundImage: "",
                backgroundRepeat: 'no-repeat', width:'100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'
            </Grid>
        </Grid>

    );
}

export default Login;
