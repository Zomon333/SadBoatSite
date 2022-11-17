import React, { useState, useEffect } from 'react'

import { Button, Box, ButtonGroup, Typography, Divider, TextField } from '@mui/material';

import Paginator from './logical/PageReducer';

import {Navbar, MenuButton} from './structural/Navbar';

import About from './page/About';
import Contact from './page/Contact';
import Home from './page/Home';
import Legal from './page/Legal';
import News from './page/News';
import Store from './page/Store';
import Unknown from './page/Unknown';

import Footer from './structural/Footer';

import '../styles/colors.css'

function App() {
  /*
    Color Control
    ------------------------------------------
  */
  //Color of the navbar
  const navbarColor="#272635ff";
  const sidebarColor="#272635ff";

  const darkGray="#272635ff";
  const paleWhite="#e8e9f3ff";

  //Describes the background of the app
  const [bgColor, setBgColor] = useState("#3f3d4a");


  /*
    Page Control
    ---------------------------------------------
  */
  const [page, setPage] = useState("home");

  return (<>
  <section style={{backgroundColor:bgColor, width:"100vw", minHeight:"110vh", paddingBottom:"5em"}}>
    <Navbar buttonAttribs={{buttonColor:bgColor, textColor:paleWhite}} setPage={setPage} navbarColor={navbarColor} sidebarColor={sidebarColor}>
      <Typography color={paleWhite} variant="h5" style={{marginTop:"0.5em", marginBottom:"0.5em"}}>
        Login
      </Typography>
      <Typography color={paleWhite} variant="caption" style={{marginTop:"0.5em", marginBottom:"0.5em"}}>
        Login temporarily disabled.
      </Typography>

      <Box style={{marginTop:"1em"}}>
        <Typography color={paleWhite} variant="caption" style={{marginTop:"0.5em"}}>
          Username:
        </Typography>
        <TextField required={true} size="small" style={{backgroundColor:bgColor}} fullWidth={true} variant="filled" label="Username" disabled={true} margin="dense"></TextField>
        
        <Typography color={paleWhite} variant="caption" style={{marginTop:"0.5em"}}>
          Password:
        </Typography>
        <TextField required={true} size="small" style={{backgroundColor:bgColor}} fullWidth={true} variant="filled" label="Password" disabled={true} margin="dense"></TextField>
      
        <Button fullWidth={true} disabled={true} textColor={paleWhite} style={{backgroundColor:bgColor, marginTop:"1em"}}>Login</Button>
      </Box>
      
      <Typography color={paleWhite} variant="h5" style={{marginTop:"2.5em", marginBottom:"0.5em"}}>
        Pages
      </Typography>
      <ButtonGroup fullWidth={true} orientation="vertical">
        <MenuButton onClick={()=>{setPage("home")}} buttonAttribs={{buttonColor:bgColor, textColor:paleWhite}} >
          Home
        </MenuButton>
        
        <Divider />
        <MenuButton onClick={()=>{setPage("news")}} buttonAttribs={{buttonColor:bgColor, textColor:paleWhite}} >
          News
        </MenuButton>
        
        <Divider />
        <MenuButton onClick={()=>{setPage("about")}} buttonAttribs={{buttonColor:bgColor, textColor:paleWhite}} >
          About Us
        </MenuButton>
        
        <Divider />
        <MenuButton onClick={()=>{setPage("contact")}} buttonAttribs={{buttonColor:bgColor, textColor:paleWhite}} >
          Contact Us
        </MenuButton>

        <Divider />
        <MenuButton onClick={()=>{setPage("store")}} buttonAttribs={{buttonColor:bgColor, textColor:paleWhite}} >
          Store
        </MenuButton>
      </ButtonGroup>

    </Navbar>

    <Paginator>
      {page}
    </Paginator>

  </section>
  <Footer>
      <br />
      <MenuButton buttonAttribs={{buttonColor:bgColor, textColor:paleWhite}} onClick={()=>setPage("legal")}>
        Legal
      </MenuButton>
  </Footer>
  </>);
}

export default App;
