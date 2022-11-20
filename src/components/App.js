import React, { useEffect, useState } from 'react'

import { Button, Box, Typography, TextField, } from '@mui/material';

import {Navbar, MenuButton} from './structural/Navbar';
import Paginator from './logical/PageReducer';
import Footer from './structural/Footer';

export const colors = {
  paleWhite:"#e8e9f3",
  greige:"#a6a6a8",
  frost:"#b1e5f2",
  ocean:"#2187b4",
  sadTeal:"#28ae9f",
  sadPurp:"#583f82",
  stone:"#3f3d41",
  navyBlue:"#272d41",
  coal:"#272635ff",
  abyss:"201835"
}

const Login = ({loginJSON={loggedIn: false, setLoggedIn: ()=>{} }})=>{

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
      
        <Button fullWidth={true} disabled={true} textColor={colors.paleWhite} style={{backgroundColor:colors.stone, marginTop:"1em"}}>Login</Button>
      </Box>
    </Box>
    : 
    <Box>

    </Box>
    }
  </>);
}

function App() {
  /*
    Page Control
    ---------------------------------------------
  */
  const [page, setPage] = useState("home");

  useEffect(()=>{
    /*
      Do something when the page changes
    */
  },[page])

  return (<>
  <section style={{backgroundColor:colors.stone, width:"100vw", minHeight:"110vh", paddingBottom:"5em"}}>
    <Navbar setPage={setPage} >
      <Login />
    </Navbar>

    <Paginator prop={page} />

  </section>
  <Footer>
      <br />
      <MenuButton onClick={()=>setPage("legal")}>
        Legal
      </MenuButton>
  </Footer>
  </>);
}

export default App;
