import React, {useState, useEffect} from 'react';
import { Box, Link, Typography, Card, IconButton, CircularProgress, Fade, Switch } from '@mui/material';

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import StyledCard from '../structural/StyledCard.jsx';
import { colors } from '../App';

type gitAPIAuthorStub = {  
    name: string,
    email: string,
    date: string 
}

type gitAPICommitterStub = {
    name: string,
    email: string,
    date: string
}

type gitAPITreeStub = {
    sha: string,
    url: string   
}

type gitAPIVerificationStub = {
    verified: boolean,
    reason: string,
    signature: string,
    payload: string,
}

type gitAPICommitStub = {
    author: gitAPIAuthorStub,
    committer: gitAPICommitterStub,
    message: string,
    tree: gitAPITreeStub,
    url: string,
    comment_count: number,
    verification: gitAPIVerificationStub,
}

type gitAPICommit = 
    {
      sha: string,
      node_id: string,
      commit: gitAPICommitStub,
      url: string,
      html_url: string,
      comments_url: string,
      author: {
        login: string,
        id: number,
        node_id: string,
        avatar_url: string,
        gravatar_id: string,
        url: string
        html_url: string,
        followers_url: string,
        following_url: string,
        gists_url: string,
        starred_url: string,
        subscriptions_url: string,
        organizations_url: string,
        repos_url: string,
        events_url: string,
        received_events_url: string,
        type: string,
        site_admin: boolean
      },
      committer: {
        login: string,
        id: number,
        node_id: string,
        avatar_url: string,
        gravatar_id: any,
        url: string,
        html_url: string,
        followers_url: string,
        following_url: string,
        gists_url: string,
        starred_url: string,
        subscriptions_url: string,
        organizations_url: string,
        repos_url: string,
        events_url: string,
        received_events_url: string,
        type: string,
        site_admin: boolean
      },
      parents: [
        {
          sha: string,
          url: string,
          html_url: string
        }
      ]
    };
  

export const GitCommit = ({slim=false, author, date, URL, children})=>{

    const charLimit=80;

    return ( !slim ? <>
        <Fade in={true} timeout={750}>
            <Link underline="none" href={URL}>
                <Box>
                    <Card style={{margin:"2em", height:"7em", paddingLeft:"0.33em", marginRight:"25vw", backgroundColor:colors.ocean}}>
                        <Card style={{width:"100%", height:"100%", margin:"0%", padding:"1em", backgroundColor:colors.coal}}>
                            <Typography style={{maxWidth:"60vw", overflowX:"hidden"}} variant="overline" fontSize={"1.2em"} color={colors.paleWhite}>
                                {((children as string).length < charLimit ) ? children : ((children as string).substring(0,(charLimit-1)).concat("..."))}

                                <br />
                            </Typography>
                            <Typography style={{float:"left"}} variant="overline" fontSize={"0.8em"} color={colors.paleWhite}>
                                <Box style={{minWidth:"30vw"}}>
                                    
                                    <div style={{float:"left"}}>
                                        Authored By: {author}  
                                    </div>
                                    <div style={{float:"right"}}>
                                        Committed On: {date}  
                                    </div>
                                    
                                </Box>
                                
                            </Typography>
                        
                        </Card>
                    </Card>
                </Box>
            </Link>
        </Fade>
    </> : <>
    
    <Link underline="none" href={URL}>
                <Box>
                    <Card style={{margin:"1em", marginLeft:"2em", height:"3em", paddingLeft:"0.33em", marginRight:"50vw", backgroundColor:colors.ocean}}>
                        <Card style={{width:"100%", height:"100%", margin:"0%", padding:"0.1em", paddingLeft:"1em", backgroundColor:colors.coal}}>
                            <Typography style={{float:"left", maxWidth:"60vw", overflowX:"hidden", padding:"0.1em"}} variant="overline" fontSize={"0.7em"} color={colors.paleWhite}>
                                {((children as string).length < charLimit ) ? children : ((children as string).substring(0,(charLimit-1)).concat("..."))}
                            </Typography>
                            <Typography style={{float:"right", maxWidth:"60vw", overflowX:"hidden", padding:"0.1em", marginRight:"5em"}} variant="overline" fontSize={"0.7em"} color={colors.paleWhite}>
                                By {author} on {date}.
                            </Typography>
                        </Card>
                    </Card>
                </Box>
            </Link>

    
    
    </>);
}

export const GitQuerier = ()=>{
    
    const [perPage, setPerPage] = useState(5);
    const [slim, setSlim] = useState(false);
    
    const [page, setPage] = useState(1);

    const [hasLoaded, setHasLoaded]=useState(false);
    const [overLimit, setOverLimit]=useState(false);

    const [commits, setCommits] = useState([{}]);

    const url="https://api.github.com/repos/zomon333/sadboat-engine/commits?";

    useEffect(()=>{
        
        fetch(url.concat("per_page=",perPage.toString(),"&page=",page.toString())).then(
            (r)=>{
                setHasLoaded(false);
                return r.json()
            }
        ).then(
            (r)=>{
                try{
                    if((r.message as string).includes("API rate limit"))
                    {
                        setOverLimit(true);
                        setTimeout(()=>{setOverLimit(false)}, (60*60*1000));
                    }
                    else
                    {
                        throw new Error("API Rate Not Limited");
                    }
                } catch
                {
                    setCommits(r);
                }
            }
        ).then(
            ()=>{
                setHasLoaded(true);
            }
        );
    },[page, perPage, slim]);

    useEffect(()=>{
        if(slim)
        {
            setPerPage(20);
        }
        else
        {
            setPerPage(5);
        }
    },[slim]);

    return (<>
        <Box style={{height:"60em"}}>
            <Box style={{padding:"2em", margin:"0em", paddingBottom:"0em", paddingTop:"4em"}}>
                <StyledCard title="Recent Commits" titleSize="h4" height="10em" stretchy={false}>
                    <Typography variant="h6">

                        <Switch checked={slim} onChange={()=>{setSlim(!slim)}}></Switch>

                        {(!overLimit) ? 

                        <>
                            <IconButton onClick={()=>{if((page)>1){setPage(page-1);}}}>
                                <ArrowCircleLeftIcon sx={{color:colors.paleWhite}} fontSize="large" />
                            </IconButton>

                            {page}

                            <IconButton onClick={()=>{setPage(page+1);}}>
                                <ArrowCircleRightIcon sx={{color:colors.paleWhite}} fontSize="large" />
                            </IconButton>
                        </> :
                        <>
                            Exceeded API Rate Limit; Commit History Disabled
                        </>
                        }

                    </Typography>
                </StyledCard>
            </Box>
            
            { !slim ? <>
                {         
                    (hasLoaded && (!overLimit)) ? (commits.map(
                        (r: gitAPICommit)=>{
                            return (<>
                                {hasLoaded ? 
                                <>

                                    <GitCommit
                                        slim={slim}
                                        author={r.commit.author.name}
                                        date={r.commit.author.date}
                                        URL={r.html_url}>
                                        {r.commit.message}        
                                    </GitCommit>               


                                </> : <><CircularProgress style={{margin:"1em",marginLeft:"32.5vw"}} /></>}</>);
                        }
                    )) : <><CircularProgress style={{margin:"1em",marginLeft:"32.5vw"}} /></> 
                }
            </>:<>
                <Grid container xs={2}>

                    {
                        (hasLoaded && (!overLimit)) ? (commits.map(
                            (r: gitAPICommit)=>{
                                return (<>
                                    {hasLoaded ? 
                                    <>

                                        <GitCommit
                                            slim={slim}
                                            author={r.commit.author.name}
                                            date={r.commit.author.date}
                                            URL={r.html_url}>
                                            {r.commit.message}        
                                        </GitCommit>               


                                    </> : <><CircularProgress style={{margin:"1em",marginLeft:"32.5vw"}} /></>}</>)
                        }
                    }
                    

                </Grid>
            
            
            </>}
            </Box>
    </>);
}

export default GitQuerier;