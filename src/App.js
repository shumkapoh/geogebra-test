import React, { useRef, useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Button } from '@mui/material';

import Board from './component/Board';

import './App.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme();

function App() {
  const board1Ref = useRef(null);
  const testRef = useRef(null);
  const [x, setX] = useState();
  const [canDrawLine, setCanDrawLine] = useState(false);

  return (
    <div className="App">
      <h1>geogebrea-test</h1>
      {/* <Board refs={board1Ref} id="app1" />
      <input
        value="SetCoords"
        onClick={() => window['app1'].setCoords('A', 5, 1)}
        type="button"
      />
      <input
        value="SetCoords"
        onClick={() => {
          const xCoord = window['app1'].getXcoord('A');
          console.log(xCoord);
        }}
        type="button"
      /> */}
      <ThemeProvider theme={theme}>
      <div className="board-wrapper">
        <Board
          id="app1"
          width={500}
          height={600}
          canDrawLine={canDrawLine}
          className=""
        />
        <div className="button-wrapper">
          <Button
            variant="contained"
            color={canDrawLine ? 'secondary' : 'primary'}
            onClick={() => {
              setCanDrawLine(!canDrawLine);
              console.log('Draw Line');
            }}
          >
            {canDrawLine ? 'Disable line drawing' : 'Enable line drawing'}
          </Button>
        </div>
      </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
