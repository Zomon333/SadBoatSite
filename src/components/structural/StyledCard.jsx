import React from 'react'
import { Card, CardContent, Typography, Divider } from '@mui/material';

import { colors } from '../App';

const StyledCard = ({title="", titleSize="h6", height="75%", children, stretchy=false}) =>
{
  const InnerCard = ({children, height, title, titleSize, stretchy})=>{
    return (stretchy) ? (<>
      {/* Card is Stretchy; it should be able to resize. */}
      <Card style={{backgroundColor:colors.coal, minHeight:height, padding:"0.7em"}}>
          <CardContent style={{height:"90%"}}>
            <Typography color={colors.paleWhite} align={"left"} variant={titleSize}>
              <strong>{title}</strong>
            </Typography>
            <Divider variant={"fullWidth"} />
            <Typography color={colors.paleWhite} style={{marginTop:"1em"}} align={"left"}>
              {children}
            </Typography>
          </CardContent>
        </Card>
        
    </>) : (<> 
      {/* Card is *not* Stretchy; it cannot resize. */}
      <Card style={{backgroundColor:colors.coal, height:height, padding:"0.7em"}}>
          <CardContent style={{height:"90%"}}>
            <Typography color={colors.paleWhite} align={"left"} variant={titleSize}>
              <strong>{title}</strong>
            </Typography>
            <Divider variant={"fullWidth"} />
            <Typography color={colors.paleWhite} style={{marginTop:"1em"}} align={"left"}>
              {children}
            </Typography>
          </CardContent>
        </Card>

    </>);
  }

  const OuterCard = ({children, height, stretchy})=>{
    return (stretchy) ? (<>
        {/* Card is Stretchy; it should be able to resize. */}
        <Card style={{paddingLeft:"0.33em", minHeight:height, backgroundColor:colors.sadTeal, marginTop:"1em"}}>
          {children}
        </Card>

      </>) : (<>
        {/* Card is *not* Stretchy; it cannot resize. */}
        <Card style={{paddingLeft:"0.33em", height:height, backgroundColor:colors.sadTeal, marginTop:"1em"}}>
          {children}
        </Card>

    </>);
  }

  return (
    <OuterCard height={height} stretchy={stretchy}>
      <InnerCard height={height} title={title} titleSize={titleSize} stretchy={stretchy}>
        {children}
      </InnerCard>
    </OuterCard>
  );
}

export default StyledCard;