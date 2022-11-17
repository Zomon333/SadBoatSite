import React from 'react';
import { Card, Divider, Typography, Box, Container, Grid } from '@mui/material';

import TriColumn from '../structural/TriColumn';
import StyledCard from '../structural/StyledCard';
import Logo from './assets/Logo';


export const Home = ()=>{

    const cardInnerColor="#272635ff";
    const cardOuterColor="#e8e9f3ff";

    const Left = <StyledCard innerColor={cardInnerColor} outerColor={cardOuterColor} fontColor="#e8e9f3ff" height="17em" titleSize={"h5"} title={"Dagan Poulin"}>
      <Box style={{height:"6.5em"}}>
        Developer, Programmer, Web Designer.
      </Box>
      
      <Box>
        <Typography variant={"h6"}>
          <strong>Contact:</strong><br />
          dagan.poulin@sadboat.com
        </Typography>
      </Box>
  
    </StyledCard>;
  
    const Mid = <StyledCard innerColor={cardInnerColor} outerColor={cardOuterColor} fontColor="#e8e9f3ff" height="17em" titleSize={"h5"} title={"Justice Guillory"}>
      <Box style={{height:"6.5em"}}>
        Developer, Programmer, Physics Specialist.
      </Box>
  
      <Box>
        <Typography variant={"h6"}>
          <strong>Contact:</strong><br />
          justice.guillory@sadboat.com
        </Typography>
      </Box>
    </StyledCard>;
  
    const Right = <StyledCard innerColor={cardInnerColor} outerColor={cardOuterColor} fontColor="#e8e9f3ff" height="17em" titleSize={"h6"} title={"We're currently looking for artists and musicians!"}>
      <Box style={{height:"6.5em"}}>
        We're looking to commission artists and musicians with flexible work requirements.
      </Box>
  
      <Box>
        <Typography variant={"h6"}>
          <strong>Contact:</strong><br />
          contact@sadboat.com
        </Typography>
      </Box>
    </StyledCard>;
  
    return (
    <> 
        <section style={{minWidth:"100vw", minHeight:"100vh"}}>
          <Box align="center" style={{margin:"1em", marginTop:"3em", width:"70%", paddingLeft:"15%", paddingRight:"15%"}}>
            <StyledCard innerColor={cardInnerColor} outerColor={cardOuterColor} fontColor="#e8e9f3ff">
              <Grid align="center" container spacing={2} style={{marginTop:"0em"}}>
                <Grid align="center" item style={{padding:"1em"}} xs={6}>
                  <Logo />
                </Grid>
                <Grid align="center" item xs={6}>
                  <Typography align="center" style={{padding:"0.5em"}} color="#e8e9f3ff" variant="h2" fontSize={"5em"}>
                    <strong>Reckless Abandon<br /> is our motto.</strong>
                  </Typography>
                </Grid>
              </Grid>
            </StyledCard>
          </Box>
          <TriColumn left={Left} mid={Mid} right={Right} size={"h6"} />  
        </section>
    </>
    );
  }

  export default Home;