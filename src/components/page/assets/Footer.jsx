import React from 'react';

import {Container} from '@mui/material';


export const Footer = ({children})=>{
    const color="#272635ff";


    return (<>
        <Container anchor="bottom" style={{minWidth:"100vw", height:"5em", backgroundColor:color}}>
            {children}
        </Container>
    </>);
}

export default Footer;