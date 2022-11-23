import React from 'react';
import {useState} from 'react';
import {Grid, Card, Slider, Typography, Button, TextField} from '@mui/material';

import ColorDisplay from './ColorDisplay';

export const ColorPicker = ({values={r:0,g:0,b:0}, setters={setR:(()=>{}), setG:(()=>{}), setB:(()=>{})}})=>{

    const [pallete, setPallete] = useState([{color:"#000000"}]);

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


    return (
      <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={3}>
          <Card style={{margin:"2em", paddingLeft:"5em", paddingRight:"5em", paddingTop:"1em", paddingBottom:"1em", width:"50em"}}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                R:{values.r}<Slider step={1} min={0} max={255} aria-label='R' value={values.r} onChange={(event, newValue)=>{setters.setR(newValue);}}/>
              </Grid>
              <Grid item xs={4}>
                <TextField label={"R"} defaultValue={0} onChange={(event)=>{setters.setR(event.target.value)}} size="small" variant="filled" />
              </Grid>

              <Grid item xs={8}>
                G:{values.g} <Slider step={1} min={0} max={255}  aria-label='G' value={values.g} onChange={(event, newValue)=>{setters.setG(newValue);}} />
              </Grid>
              <Grid item xs={4}>
                <TextField label={"G"} defaultValue={0} onChange={(event)=>{setters.setG(event.target.value)}} size="small"  variant="filled" />
              </Grid>

              <Grid item xs={8}>
                B:{values.b} <Slider step={1} min={0} max={255}  aria-label='B' value={values.b} onChange={(event, newValue)=>{setters.setB(newValue);}} />
              </Grid>
              <Grid item xs={4}>
                <TextField label={"B"} defaultValue={0} onChange={(event)=>{setters.setB(event.target.value)}} size="small" variant="filled" />
              </Grid>
            </Grid>

            <Typography variant="h6">
              {getColor(values.r,values.g,values.b)}
            </Typography>
            <ColorDisplay>
              {getColor(values.r,values.g,values.b)}
            </ColorDisplay>


            <Button style={{margin:"1em"}} variant="contained" onClick={()=>{setPallete([].concat(pallete,[{color:getColor(values.r,values.g,values.b)}]));}}>
              Add to Pallete
            </Button>
            <Button style={{margin:"1em"}} variant="contained" onClick={()=>{setPallete([{color:"#000000"}]);}}>
              Clear Pallete
            </Button>


            <Card style={{marginTop:"5em", padding:"2em"}}>
              <Typography variant="h5">
                Custom Pallete
              </Typography>
              {pallete.map((color)=>{
                return (<ColorDisplay setters={setters}>{color.color}</ColorDisplay>);
              })}
            </Card>


            <Card sx={{marginTop:"5em", padding:"2em"}}>
              <Typography variant="h5">
                SadBoat Pallete
              </Typography>

              <ColorDisplay setters={setters}>#e8e9f3ff </ColorDisplay>
              <ColorDisplay setters={setters}>#a6a6a8   </ColorDisplay>
              <ColorDisplay setters={setters}>#b1e5f2ff </ColorDisplay>
              <ColorDisplay setters={setters}>#2187b4   </ColorDisplay>
              <ColorDisplay setters={setters}>#28AE9F   </ColorDisplay>
              <ColorDisplay setters={setters}>#583f82   </ColorDisplay>
              <ColorDisplay setters={setters}>#272d41   </ColorDisplay>
              <ColorDisplay setters={setters}>#201835   </ColorDisplay>
              <ColorDisplay setters={setters}>#272635ff </ColorDisplay>
              <ColorDisplay setters={setters}>#3f3d4a   </ColorDisplay>
            </Card>
          </Card>
        </Grid>
      </Grid>
      
    );
  }
  
  export default ColorPicker;