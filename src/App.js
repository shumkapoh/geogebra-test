import React, { useRef } from 'react';
import Board from './component/Board';
import './App.css';

function App() {
  const board1Ref = useRef(null);
  const testRef = useRef(null);

  return (
    <div>
      <Board refs={board1Ref} />
      <div id="test" ref={testRef} />
    </div>
  );
}

export default App;
