import * as React from 'react';
import { Container } from '@mui/material';

export const DiscordEmbed = ()=>{
    return (<>
        <Container style={{marginTop:"2em", padding:"0em"}}>
            <iframe title="SadBoatDiscordEmbed" style={{float:"right", width:"80%", height:"70vh", marginRight:"2em"}} src={"https://discord.com/widget?id=854077586473091173&amp;theme=dark"} allowtransparency="true" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" frameBorder="0" />
        </Container>
    </>);
};

export default DiscordEmbed;