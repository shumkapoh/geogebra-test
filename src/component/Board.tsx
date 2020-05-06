import React, { useEffect } from 'react';

const Board = ({ refs }: { refs: any }) => {
  useEffect(() => {
    const ggbApp = new window.GGBApplet(
      {
        id: 'app1',
        appName: 'geometry',
        width: 800,
        height: 600,
        showToolBar: true,
        showAlgebraInput: true,
        showMenuBar: true,
        appletOnLoad: () => {
          console.log('done loading');
        },
      },
      true
    );

    window.addEventListener('load', function () {
      ggbApp.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
      ggbApp.inject('ggb-element');
    });

    return () => { };
  }, []);

  return <div id="ggb-element" ref={refs} />;
};

declare global {
  interface Window {
    GGBApplet: any
  }
}

export default Board;
