import React from 'react';
import {Card, CardActionArea} from '@mui/material';

export const ColorDisplay =({children, setters={setR:(()=>{}), setG:(()=>{}), setB:(()=>{})}})=>
{
    const evalColor = (color)=>{
        const r=color[1]+color[2];
        const g=color[3]+color[4];
        const b=color[5]+color[6];

        const rPer=((parseInt(r,16))/255);
        const gPer=((parseInt(g,16))/255);
        const bPer=((parseInt(b,16))/255);

        const avgBright=(rPer+gPer+bPer)/3;

        return (avgBright>0.5)?"#000000":"#FFFFFF";
    };

    const handleClick = ()=>{
        setters.setR(parseInt((children[1]+children[2]),16));
        setters.setG(parseInt((children[3]+children[4]),16));
        setters.setB(parseInt((children[5]+children[6]),16));
    };

    return <Card sx={{color:evalColor(children), margin:"0.1em", width:"5em", height:"5em", float:"left", backgroundColor:children}}>
        <CardActionArea style={{width:"100%", height:"100%"}} onClick={handleClick}>
            <div align="center" >
                {children}
            </div>
        </CardActionArea>
    </Card>;
}

export default ColorDisplay;