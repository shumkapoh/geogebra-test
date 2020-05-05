import React, { useEffect, useRef, useState } from 'react';
import Board from './component/Board';
import './App.css';

function App() {
  const board1Ref = useRef(null);
  const testRef = useRef(null);
  let app;

  const [appId, setAppId] = useState(null);

  useEffect(() => {
    window.addEventListener('load', async () => {
      app = board1Ref.current.children[0].children[1];
      setAppId(app.id);
      console.log(app);
      console.log(appId);
    });

    return window.removeEventListener('load', () => {});
  }, []);
  return (
    <div>
      <Board refs={board1Ref} />
      <div id="test" ref={testRef} />
    </div>
  );
}

export default App;
