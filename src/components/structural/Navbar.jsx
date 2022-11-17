import React, {useState} from 'react';
import {ButtonGroup, IconButton, Drawer, Container, Typography, Box, AppBar, Toolbar, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const MenuButton = ({children, onClick, buttonAttribs={buttonColor:"", textColor:""}})=>    {
    return (<>
        <Button variant={"contained"} onClick={onClick} style={{backgroundColor:buttonAttribs.buttonColor, borderColor:buttonAttribs.textColor, textColor:buttonAttribs.textColor}}>
            {children}
        </Button>
    </>);
}

export const Navbar = ({setPage, navbarColor, sidebarColor, buttonAttribs={buttonColor:"", textColor:""}, children}) => {
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
              <ButtonGroup style={{marginLeft:"25vw"}} fullWidth={true} variant="contained" aria-label="outlined primary button group">
                <MenuButton buttonAttribs={buttonAttribs} onClick={()=>{setPage("home")}} >
                    Home
                </MenuButton>
                <MenuButton buttonAttribs={buttonAttribs} onClick={()=>{setPage("news")}}>
                    News
                </MenuButton>
                <MenuButton buttonAttribs={buttonAttribs} onClick={()=>{setPage("about")}}>
                    About Us
                </MenuButton>
                <MenuButton buttonAttribs={buttonAttribs} onClick={()=>{setPage("contact")}}>
                    Contact Us
                </MenuButton>
                <MenuButton buttonAttribs={buttonAttribs} onClick={()=>{setPage("store")}}>
                    Store
                </MenuButton>
              </ButtonGroup>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default Navbar;