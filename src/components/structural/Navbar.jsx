import React, {useState} from 'react';
import {Divider, ButtonGroup, IconButton, Drawer, Container, Typography, Box, AppBar, Toolbar, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { colors } from '../App';

export const MenuButton = ({children, onClick})=>    {
    return (<>
        <Button variant={"contained"} onClick={onClick} style={{backgroundColor:colors.stone, borderColor:colors.paleWhite, textColor:colors.paleWhite}}>
            {children}
        </Button>
    </>);
}

const MenuSection = ({children})=>{

    const [sideOpen, setSideOpen] = useState(false);

    return (
        <>
            <IconButton onClick={()=>{setSideOpen(!sideOpen)}} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
                <Drawer open={sideOpen} anchor='left'>
                    <Container sx={{backgroundColor:colors.coal}} style={{height:"100vh", width:"12em", padding:"2em"}}>
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

export const Navbar = ({ setPage, children}) => {

    return (
        <Box style={{backgroundColor:colors.coal}} sx={{ flexGrow: 1 }}>
          <AppBar style={{backgroundColor:colors.coal}} position="static">
            <Toolbar>
              <MenuSection>
                {children}
                <Typography color={colors.paleWhite} variant="h5" style={{marginTop:"2.5em", marginBottom:"0.5em"}}>
                    Pages
                </Typography>
                <ButtonGroup fullWidth orientation="vertical">
                    <MenuButton onClick={()=>{setPage("home"); }}  >
                        Home
                    </MenuButton>
                    
                    <Divider />
                    <MenuButton onClick={()=>{setPage("news"); }}  >
                        News
                    </MenuButton>
                    
                    <Divider />
                    <MenuButton onClick={()=>{setPage("about"); }}  >
                        About Us
                    </MenuButton>
                    
                    <Divider />
                    <MenuButton onClick={()=>{setPage("contact"); }}  >
                        Contact Us
                    </MenuButton>

                    <Divider />
                    <MenuButton onClick={()=>{setPage("store"); }}  >
                        Store
                    </MenuButton>
                    </ButtonGroup>
                    
              </MenuSection>
              <ButtonGroup style={{marginLeft:"25vw"}} fullWidth variant="contained" aria-label="outlined primary button group">
                <MenuButton onClick={()=>{setPage("home"); }} >
                    Home
                </MenuButton>
                <MenuButton onClick={()=>{setPage("news"); }}>
                    News
                </MenuButton>
                <MenuButton onClick={()=>{setPage("about"); }}>
                    About Us
                </MenuButton>
                <MenuButton onClick={()=>{setPage("contact"); }}>
                    Contact Us
                </MenuButton>
                <MenuButton onClick={()=>{setPage("store"); }}>
                    Store
                </MenuButton>
              </ButtonGroup>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default Navbar;