import React from 'react';
import {makeStyles} from '@mui/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { fontWeight } from '@mui/system';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const useStyle = makeStyles({
    mainSI: {
        width: '68vw',
        height: '70vh',
        border: '0px solid blue',
        position: 'relative',
        left: '240px',
        top: '105px',
        display: 'flex'
    },
    loginSI: {
        width: '50%',
        height: '100%',
        border: '0px solid blue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    welcSI: {
        width: '50%',
        height: '100%',
        border: '0px solid pink',
        backgroundColor: '#e66368',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formSI: {
        width: '80%',
        height: '80%',
        border: '0px solid pink',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    firstSI: {
        width: '100%',
        height: '15%',
        border: '0px solid black',
        display: 'flex',
        justifyContent: 'space-between'
    },
    signSI: {
        fontSize: '30px',
        fontWeight: '500',
        color: '#e66368',
    },
    nameSI: {
        width: '100%',
        height: '27%',
        border: '0px solid orange',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        
    },
    btnSI: {
        width: '100%',
        height: '11%',
    },
    btnColSI: {
        backgroundColor: '#e5626c !important',
        textTransform: 'none !important',
        color: 'white !important'
    },
    footerSI: {
        width: '100%',
        height: '12%',
        border: '0px solid blue',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 'medium',
        color: 'grey'
    },
    contentSI: {
        width: '70%',
        height: '32%',
        border: '0px solid blue',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        color: 'white',
    },
    welSU: {
        fontSize: '28px',
        fontWeight: 'bold',
        color: 'white',
    }
})

function SignIn() {
    const classes = useStyle()
  return (
    <Paper className={classes.mainSI}>
        <Box className={classes.loginSI}>
            <Box className={classes.formSI}>
                <Box className={classes.firstSI}>
                    <Box className={classes.signSI}>Sign In</Box>
                    <Box className={classes.iconsSI}>
                        <FacebookOutlinedIcon fontSize='large'/>
                    </Box>
                </Box>
                <Box className={classes.nameSI}>
                    <h5 style={{margin: '0px',textAlign: 'left'}}>USERNAME</h5>
                    <TextField sx={{ borderRadius: '28px !important' }} label="User Name" variant="filled" size="small"/>
                </Box>
                <Box className={classes.nameSI}>
                    <h5 style={{margin: '0px',textAlign: 'left'}}>PASSWORD</h5>
                    <TextField label="Password" variant="filled" size="small"/>
                </Box>
                <Box className={classes.btnSI}><Button variant="contained" fullWidth='true' sx={{ height: '100%', borderRadius: 30 }} className={classes.btnColSI} >Sign In</Button></Box>
                <Box className={classes.footerSI}>
                    <Box style={{position: 'relative', right: '12px'}}><Checkbox />Remember Me</Box>
                    <Box>Forgot Password</Box>
                </Box>
            </Box>
        </Box>
        <Box className={classes.welcSI}>
            <Box className={classes.contentSI}>
                <Box className={classes.welSU}>Welcome to login</Box>
                <Box>Don't have an account?</Box>
                <Box><Button variant="outlined" className={classes.btnColSI} sx={{ borderRadius: 28 }}>Sign Up</Button></Box>
            </Box>
        </Box>
    </Paper>
  )
}

export default SignIn