import React, { useEffect, useState } from 'react'

import { } from '@mui/material';

import {Navbar, MenuButton} from './structural/Navbar';
import Login from './logical/Login';
import Paginator from './logical/PageReducer';
import Footer from './structural/Footer';

export const colors = {
  paleWhite:"#e8e9f3",
  greige:"#a6a6a8",
  frost:"#b1e5f2",
  ocean:"#2187b4",
  sadTeal:"#28ae9f",
  sadPurp:"#583f82",
  stone:"#3f3d41",
  navyBlue:"#272d41",
  coal:"#272635ff",
  abyss:"201835"
}



function App() {
  /*
    Page Control
    ---------------------------------------------
  */
  const [page, setPage] = useState("home");

  useEffect(()=>{
    /*
      Do something when the page changes
    */
  },[page])

  return (<>
  <section style={{backgroundColor:colors.stone, width:"100vw", minHeight:"110vh", paddingBottom:"5em"}}>
    <Navbar setPage={setPage} >
      <Login />
    </Navbar>

    <Paginator prop={page} />

  </section>
  <Footer>
      <br />
      <MenuButton onClick={()=>setPage("legal")}>
        Legal
      </MenuButton>
  </Footer>
  </>);
}

export default App;
