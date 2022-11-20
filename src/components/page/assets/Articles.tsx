import React from 'react';
import { postDate, articleStub, articleData, initialPostDate, initialArticleStub } from './ArticleTypes';
import {List, ListItem, ListItemIcon, ListItemText, Typography, Box} from '@mui/material';

/*
Imports for release notes
*/
import UpdateIcon from '@mui/icons-material/Update';

import { CheckBox } from '@mui/icons-material';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import CancelIcon from '@mui/icons-material/Cancel';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

/*<List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>*/

const darkGray="#272635ff";
const mediumGray="#3f3d4a";
const paleWhite="#e8e9f3ff";

const Generic=({icon, children})=>{
    return (<>
        <ListItem>
            <ListItemIcon>
                <Typography color={paleWhite} variant="overline" fontSize="1em">
                    {icon} <Box style={{float:"right", marginLeft:"1em", marginTop:"0em"}}>{children}</Box>
                </Typography>
            </ListItemIcon>
        </ListItem>
    </>);
}

const Finished=({children})=>{
    const icon=<CheckBox sx={{color:paleWhite, marginTop:"0.5em"}} fontSize="small"/>;
    return (<>
        <Generic icon={icon}>
            {children}
        </Generic>
    </>);
}

const Pending=({children})=>{
    const icon=<IndeterminateCheckBoxIcon sx={{color:paleWhite, marginTop:"0.5em"}} fontSize="small"/>;
    return (<>
        <Generic icon={icon}>
            {children}
        </Generic>
    </>);
}

const Cancelled=({children})=>{
    const icon=<CancelIcon sx={{color:paleWhite, marginTop:"0.5em"}} fontSize="small"/>;
    return (<>
        <Generic icon={icon}>
            {children}
        </Generic>
    </>);
}

const TBD=({children})=>{
    const icon=<QuestionMarkIcon sx={{color:paleWhite, marginTop:"0.5em"}} fontSize="small"/>;
    return (<>
        <Generic icon={icon}>
            {children}
        </Generic>
    </>);
}

const Update=({children})=>{
    const icon=<UpdateIcon sx={{color:paleWhite, marginTop:"0.5em"}} fontSize="small"/>;
    return (<>
        <Generic icon={icon}>
            {children}
        </Generic>
    </>);
}

export const articles:  articleData[] = [
    
    
    
    {
        header: {
            username:"Dagan Poulin",
            title: "Website Development",
            postedOn: {
                postDay: 18,
                postMonth: 10,
                postYear: 2022,

                postHour: 0,
                postMinute: 58,
                postSecond: 0,
            }
        },
        content: <Typography variant="overline">
            Hi all! As this brief post entails, we've begun work on constructing a new website. <br />
            The various old sites were hard to maintain, slow, a nuisance to navigate, an eyesore, and a bit more. For these reasons, we've opted to replace it. <br />
            The new site you see before you is made in React, using MaterialUI. It's more stable, faster, and also more appealing to the eye! <br />
            This progress hasn't given much delay to our work on the SadBoat engine. Instead, it's a simple stepping stone to a better user experience. <br />
            Enjoy! More updates will be posted here in the future, including change logs for the engine.<br />
            <br />
            ~Dagan<br />
        </Typography>,
    },
    {
        header: {
            username:"Dagan Poulin",
            title: "Minor Release 0.02.8V",
            postedOn: {
                postDay: 4,
                postMonth: 10,
                postYear: 2022,

                postHour: 0,
                postMinute: 0,
                postSecond: 0,
            }
        },
        content: <>
            <List>
                <Update>
                    Changed from OpenGL to Vulkan for better multithreading support.
                </Update>
                <Finished>
                    Added some fun game materials for later   
                </Finished>
                

                <Generic></Generic>
                <TBD>
                    Next release will be 0.02.9V which will contain Vulkan abstractions like Instance
                </TBD>
            </List>
        </>,
    },
    {
        header: {
            username:"Dagan Poulin",
            title: "Minor Release 0.02.7V",
            postedOn: {
                postDay: 25,
                postMonth: 8,
                postYear: 2022,

                postHour: 0,
                postMinute: 0,
                postSecond: 0,
            }
        },
        content: <>
            <List>
                <Finished>
                    Added Window class for handling the creation of an OpenGL window.
                </Finished>
                <Finished>
                    Added Shader class for handling the loading and compilation of an OpenGL shader.
                </Finished>
                

                <Generic></Generic>
                <TBD>
                    Next release will be 0.02.8V which will contain more OpenGL abstractions, such as a VAO class, and a ShaderProgram class.
                </TBD>
            </List>
        </>,
    },
    {
        header: {
            username:"Dagan Poulin",
            title: "Minor Release: 0.02.6V",
            postedOn: {
                postDay: 21,
                postMonth: 8,
                postYear: 2022,

                postHour: 0,
                postMinute: 0,
                postSecond: 0,
            }
        },
        content: <>
            <List>
                <Finished>
                    Added script ./install_libs.sh to install OpenGL, freeglut, and GLEW.
                </Finished>
                <Finished>
                    Updated makefile to link OpenGL, freeglut, and GLEW.
                </Finished>
                

                <Generic></Generic>
                <Pending>
                    This release is a really minor change, mostly indicative of successful linking.
                </Pending>
                <TBD>
                    Next release will be 0.02.7V which will contain some OpenGL abstractions.
                </TBD>
            </List>
        </>,
    },
    {
        header: {
            username:"Dagan Poulin",
            title: "Minor Release 0.02.5V",
            postedOn: {
                postDay: 21,
                postMonth: 8,
                postYear: 2022,

                postHour: 0,
                postMinute: 58,
                postSecond: 0,
            }
        },
        content: <>
            <List>
                <Update>
                    Added RecurringEvent, child of TimedEvent
                </Update>
                <Finished>
                    Has support for recur(), defer()
                </Finished>
                <Finished>
                    Can run on any user defined frequency
                </Finished>
                <Finished>
                    Can be stopped externally via a promise,  or with end()
                </Finished>
                <Finished>
                    Carries TimedEvent's suppression into use, allowing for temporary pausing of a thread. 
                </Finished>
                <Generic>

                </Generic>
                <TBD>
                    Next weekly release will be 0.02.6V which is mostly OpenGL configuration
                </TBD>
            </List>
        </>,
    },
    {
        header: {
            username:"Dagan Poulin",
            title: "Minor Release 0.02.4V",
            postedOn: {
                postDay: 19,
                postMonth: 8,
                postYear: 2022,

                postHour: 0,
                postMinute: 58,
                postSecond: 0,
            }
        },
        content: <>
        
            <List>
                <Update>
                    Added TimedEvent class, child of Event class
                </Update>
                <Finished>
                    Added suppress() and release() for flow control
                </Finished>
                <Finished>
                    Added defer() and call() for explicit thread timing control
                </Finished>
                <Finished>
                    Supports operator overloading for comparison of event timings and priority queue sorting
                </Finished>
                <Generic> 

                </Generic>
                <TBD>
                    Next weekly release will be 0.02.5V with RecurringEvents and Vectors 
                </TBD>
            </List>
        </>,
    }

];

export default articles;


/*
TEMPLATE:
{
        header: {
            username:"Dagan Poulin",
            title: "",
            postedOn: {
                postDay: 0,
                postMonth: 0,
                postYear: 2022,

                postHour: 0,
                postMinute: 0,
                postSecond: 0,
            }
        },
        content: <>
            <List>
                <Update>
                    
                </Update>
                <Finished>
                    
                </Finished>
                

                <Generic></Generic>
                <TBD>
                    
                </TBD>
            </List>
        </>,
    },

*/