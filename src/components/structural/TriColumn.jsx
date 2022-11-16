import React from 'react'

import { Container, Grid, Typography } from '@mui/material';

import '../../styles/colors.css';

export const TriColumn = ({left, mid, right, size, children})=>
{
  return (
    <>
      
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <Container>
            <Typography align={"center"} variant={size}>
                {children}
            </Typography>
          </Container>
        </Grid>

        <Grid align={"center"} item xs={4}>
          <Container>
            {left}
          </Container>
        </Grid>

        <Grid align={"center"} item xs={4}>
          <Container>
            {mid}
          </Container>
        </Grid>

        <Grid align={"center"} item xs={4}>
          <Container>
            {right}
          </Container>
        </Grid>

      </Grid>
    </>
  );
};

export default TriColumn;