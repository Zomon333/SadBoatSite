import React from 'react'
import { } from '@mui/material';

import TriColumn from './structural/TriColumn';

import '../styles/colors.css'

function App() {

  const Left = <>
    A
  </>;

  const Mid = <>
    B
  </>;

  const Right = <>
    C
  </>;

  



  return (
    <TriColumn left={Left} mid={Mid} right={Right} size={"h3"}>
      Test Title
    </TriColumn>
  );
}

export default App;
