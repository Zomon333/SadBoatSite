import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

import TriColumn from '../structural/TriColumn';
import StyledCard from '../structural/StyledCard';
import Logo from './assets/Logo';

import { colors } from '../App';

export const Home = ()=>{
  
    return (
    <> 
        <section style={{minWidth:"100vw", minHeight:"100vh"}}>
          <Box align="center" style={{margin:"1em", marginTop:"3em", width:"70%", paddingLeft:"15%", paddingRight:"15%"}}>
            <StyledCard>
              <Grid align="center" container spacing={2} style={{marginTop:"0em"}}>
                <Grid align="center" item style={{padding:"1em"}} xs={6}>
                  <Logo />
                </Grid>
                <Grid align="center" item xs={6}>
                  <Typography align="center" style={{padding:"0.5em"}} color={colors.paleWhite} variant="h2" fontSize={"5em"}>
                    <strong>Reckless Abandon<br /> is our motto.</strong>
                  </Typography>
                </Grid>
              </Grid>
            </StyledCard>
          </Box>

          <TriColumn size={"h6"}>
            {[
              /* Title */
              <></>,

              /* Left Panel */
              <StyledCard height="17em" titleSize={"h5"} title={"Dagan Poulin"}>
                <Box style={{height:"6.5em"}}>
                  Developer, Programmer, Web Designer.
                </Box>

                <Box>
                  <Typography variant={"h6"}>
                    <strong>Contact:</strong><br />
                    dagan.poulin@sadboat.com
                  </Typography>
                </Box>                
              </StyledCard>,

              /* Middle Panel */
              <StyledCard height="17em" titleSize={"h5"} title={"Justice Guillory"}>
                <Box style={{height:"6.5em"}}>
                  Developer, Programmer, Physics Specialist.
                </Box>
            
                <Box>
                  <Typography variant={"h6"}>
                    <strong>Contact:</strong><br />
                    justice.guillory@sadboat.com
                  </Typography>
                </Box>
              </StyledCard>,

              /* Right Panel */
              <StyledCard height="17em" titleSize={"h6"} title={"We're currently looking for artists and musicians!"}>
                <Box style={{height:"6.5em"}}>
                  We're looking to commission artists and musicians with flexible work requirements.
                </Box>

                <Box>
                  <Typography variant={"h6"}>
                    <strong>Contact:</strong><br />
                    contact@sadboat.com
                  </Typography>
                </Box>
              </StyledCard>,
            ]}
          </TriColumn>
        </section>
    </>
    );
  }

  export default Home;