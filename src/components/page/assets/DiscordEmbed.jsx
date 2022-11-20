import * as React from 'react';
import { CircularProgress, Container, Fade } from '@mui/material';

export const DiscordEmbed = ()=>{

    const [loaded, setLoaded] = React.useState(false);

    

    return (<>
        <Container style={{marginTop:"2em", padding:"0em"}}>
            {!loaded ? <CircularProgress style={{float:"right", marginRight:"15vw", marginTop:"15vh"}} /> : <></>}
            <Fade in={loaded} timeout={1000}>
                <iframe onLoad={()=>{setLoaded(true)}} title="SadBoatDiscordEmbed" style={{float:"right", width:"80%", height:"72vh", marginRight:"2em"}} src={"https://discord.com/widget?id=854077586473091173&amp;theme=dark"} allowtransparency="true" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" frameBorder="0" />
            </Fade>
        </Container>
    </>);
};

export default DiscordEmbed;