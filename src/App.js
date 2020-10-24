import React, { useRef, useEffect, useState } from 'react';
import Board from './component/Board';
import { Button } from '@material-ui/core';

import './App.scss';

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
    </div>
  );
}

export default App;
