import React, { useState, useEffect } from 'react'

import {SvgIcon, IconButton, Drawer, Container, Typography, Box, AppBar, Toolbar, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Home from './page/Home';
import Footer from './page/assets/Footer';

import '../styles/colors.css'



export const Navbar = ({navbarColor, sidebarColor, children}) => {
    const MenuSection = ({color, children})=>{

        const [sideOpen, setSideOpen] = useState(false);
    
        return (
            <>
                <IconButton onClick={()=>{setSideOpen(!sideOpen)}} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                    <Drawer open={sideOpen} anchor='left'>
                        <Container sx={{backgroundColor:color}} style={{height:"100vh", width:"12em", padding:"2em"}}>
                            {children}
                        </Container>
                    </Drawer>
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Menu
                </Typography>
            </>
        );
    }

    return (
        <Box style={{backgroundColor:navbarColor}} sx={{ flexGrow: 1 }}>
          <AppBar style={{backgroundColor:navbarColor}} position="static">
            <Toolbar>
              <MenuSection color={sidebarColor}>
                    {children}
              </MenuSection>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

function App() {
  /*
    Color Control
    ------------------------------------------
  */
  //Color of the navbar
  const navbarColor="#272635ff";
  const sidebarColor="#272635ff";

  //Converts RGB ints into hex
  const getColor = (r, g, b)=>
  {
    const toHex = (arg) =>
    {
      const rBit = arg%16;
      const lBit = arg-rBit;
      
      return (lBit/16).toString(16).concat(rBit.toString(16));
    }
    
    return ("#".concat(toHex(r), toHex(g), toHex(b)));
  }

  //Stores the RGB values of the app
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);
  const [hasDrawn, setHasDrawn] = useState(false);

  //Describes the background of the app
  const [bgColor, setBgColor] = useState("#3f3d4a");

  //Updates the background color if R,G,B updates
  /*useEffect(
    ()=>{
      if(hasDrawn)
      {
        setBgColor(getColor(r,g,b));
      }
      setHasDrawn(true);
    },[r,g,b]
  )*/

  const setters={
    setR:setR,
    setG:setG,
    setB:setB,
  }
  const values={
    r:r,
    g:g,
    b:b,
  }


  

  return (<>
  <section style={{backgroundColor:bgColor, width:"100vw", minHeight:"110vh", paddingBottom:"5em"}}>
    <Navbar navbarColor={navbarColor} sidebarColor={sidebarColor}></Navbar>

    <Home />


  </section>
  <Footer>
      <br />
    </Footer>
  </>);
}

export default App;
