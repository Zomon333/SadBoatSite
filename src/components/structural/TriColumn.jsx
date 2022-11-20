import React from 'react'

import { Container, Grid, Typography } from '@mui/material';

import '../../styles/colors.css';

export const TriColumn = ({size, children=[<></>,<></>,<></>,<></>]})=>
{
  return (
    <>
      {
      (children.length===4) ? 
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <Container>
            <Typography align={"center"} variant={size}>
                {children[0]}
            </Typography>
          </Container>
        </Grid>

        <Grid align={"center"} item xs={4}>
          <Container>
            {children[1]}
          </Container>
        </Grid>

        <Grid align={"center"} item xs={4}>
          <Container>
            {children[2]}
          </Container>
        </Grid>

        <Grid align={"center"} item xs={4}>
          <Container>
            {children[3]}
          </Container>
        </Grid>

      </Grid> : <></>
      }
    </>

  );
};

export default TriColumn;