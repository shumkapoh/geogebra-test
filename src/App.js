import React, { useRef, useEffect, useState } from 'react';
import Board from './component/Board';
import './App.css';

function App() {
  const board1Ref = useRef(null);
  const testRef = useRef(null);
  const [x, setX] = useState();
  const [canDrawLine, setCanDrawLine] = useState(false);

  return (
    <div>
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
      <Board id="app1" width={500} height={500} canDrawLine={canDrawLine} />
      <input
        value={canDrawLine ? 'Draw Line' : 'Cannot draw line'}
        onClick={() => {
          setCanDrawLine(!canDrawLine);
          console.log('Draw Line');
        }}
        type="button"
      />
    </div>
  );
}

export default App;
