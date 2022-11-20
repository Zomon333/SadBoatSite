import React from 'react';
import { useState } from 'react';

import { Accordion, AccordionDetails, AccordionSummary, IconButton, Divider, Grid, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import articles from './assets/Articles.tsx';
import { postDate } from './assets/ArticleTypes';

import StyledCard from '../structural/StyledCard.jsx';
import DiscordEmbed from './assets/DiscordEmbed.jsx';
import GitQuerier from '../logical/GitQuerier.tsx';
import { colors } from '../App';


export const Article = ({page, offset})=>{
        
    const postID = (page*5)+offset;
    if(postID<articles.length)
    {
        const username=articles[postID].header.username;
        const postedOn=articles[postID].header.postedOn;
        const title=articles[postID].header.title;

        const content=articles[postID].content;

        const formatPostedOn=(postedOn: postDate)=>{
            let temp = new Date();
            temp.setDate(postedOn.postDay);
            temp.setMonth(postedOn.postMonth);
            temp.setUTCFullYear(postedOn.postYear);

            temp.setHours(postedOn.postHour);
            temp.setMinutes(postedOn.postMinute);
            temp.setSeconds(postedOn.postSecond);

            return temp.toDateString();
        }


        return (postID<articles.length) ?
        <Accordion style={{backgroundColor:colors.stone}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:colors.paleWhite}} />} aria-controls="panel1a-content" id="panel1a-header"> 

                <Typography color={colors.paleWhite} variant="overline" fontSize="1em">
                    <strong>{title}</strong>
                </Typography>

                <Typography style={{paddingTop:"0em", paddingLeft:"1em"}} color={colors.paleWhite} variant="overline" fontSize="0.6em">
                    <strong>
                        Authored by: {username}<br />
                        Posted on: { formatPostedOn(postedOn) }
                    </strong>
                </Typography>

            </AccordionSummary>
            <AccordionDetails>
                <Typography color={colors.paleWhite} style={{overflowX:"scroll"}}>
                    {content}
                </Typography>
            </AccordionDetails>
        </Accordion> :
        <></>;
    } else
    {
        return <></>;
    }
}



/*
    News Page
--------------------------------------------------------------------
*/

export const News = ()=>{
    const pages = ((Math.floor((articles.length)/5))+1);

    const [currentPage, setCurrentPage] = useState(0);

    return (<>
        <Grid container spacing="2" style={{marginTop:"3em"}}>
            <Grid item xs={8}>
                <Box style={{marginLeft:"2em", marginTop:"2em"}}>
                    <StyledCard height="70vh" stretchy={true} title="News" titleSize="h4">
                        
                        <Typography variant="h6">
                            <IconButton onClick={()=>{if((currentPage)>=1){setCurrentPage(currentPage-1);}}}>
                                <ArrowCircleLeftIcon sx={{color:colors.paleWhite}} fontSize="large" />
                            </IconButton>

                            {currentPage+1} of {pages}

                            <IconButton onClick={()=>{if((currentPage+2)<=pages){setCurrentPage(currentPage+1);}}}>
                                <ArrowCircleRightIcon sx={{color:colors.paleWhite}} fontSize="large" />
                            </IconButton>
                            
                        </Typography>

                        <Divider />

                        <Article page={currentPage} offset={0} />
                        <Article page={currentPage} offset={1} />
                        <Article page={currentPage} offset={2} />
                        <Article page={currentPage} offset={3} />
                        <Article page={currentPage} offset={4} />

                    </StyledCard>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <DiscordEmbed />
            </Grid>
        </Grid>

        <GitQuerier />

    </>);
};

export default News;