import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

import { colors } from '../App';

export const Login = ({loginJSON={loggedIn: false, setLoggedIn: ()=>{} }})=>{

    return (<>
      {(!loginJSON.loggedIn) ?
      <Box>
        <Typography color={colors.paleWhite} variant="h5" style={{marginTop:"0.5em", marginBottom:"0.5em"}}>
          Login
        </Typography>
        <Typography color={colors.paleWhite} variant="caption" style={{marginTop:"0.5em", marginBottom:"0.5em"}}>
          Login temporarily disabled.
        </Typography>
  
        <Box style={{marginTop:"1em"}}>
          <Typography color={colors.paleWhite} variant="caption" style={{marginTop:"0.5em"}}>
            Username:
          </Typography>
          <TextField required disabled fullWidth size="small" style={{backgroundColor:colors.stone}} variant="filled" label="Username" margin="dense"></TextField>
          
          <Typography color={colors.paleWhite} variant="caption" style={{marginTop:"0.5em"}}>
            Password:
          </Typography>
          <TextField required disabled fullWidth size="small" style={{backgroundColor:colors.stone}} variant="filled" label="Password" margin="dense"></TextField>
        
          <Button fullWidth disabled textColor={colors.paleWhite} style={{backgroundColor:colors.stone, marginTop:"1em"}}>Login</Button>
        </Box>
      </Box>
      : 
      <Box>
  
      </Box>
      }
    </>);
  }


export default Login;