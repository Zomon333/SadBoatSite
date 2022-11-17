import React from 'react'
import { Card, CardContent, Typography, Divider } from '@mui/material';

const StyledCard = ({innerColor, outerColor, fontColor, title, titleSize, height, children}) =>
{
  const InnerCard = ({children, fontColor, color, height, title, titleSize})=>{
    return (<>
     <Card style={{backgroundColor:color, height:height}}>
        <CardContent style={{height:"90%"}}>
          <Typography color={fontColor} align={"left"} variant={titleSize}>
            <strong>{title}</strong>
          </Typography>
          <Divider variant={"fullWidth"} />
          <Typography color={fontColor} style={{marginTop:"1em"}} align={"left"}>
            {children}
          </Typography>
        </CardContent>
      </Card>
    
    </>);
  }

  const OuterCard = ({children, color, height})=>{
    return (<>
      <Card style={{paddingLeft:"0.33em", height:height, backgroundColor:color, marginTop:"1em"}}>
        {children}
      </Card>
    </>);
  }

  return (
    <OuterCard color={outerColor} height={height}>
      <InnerCard fontColor={fontColor} color={innerColor} height={height} title={title} titleSize={titleSize}>
        {children}
      </InnerCard>
    </OuterCard>
  );
}

export default StyledCard;