import React, { useEffect, useState, useRef } from 'react';

// GeoBoard
// const Board = (props: BoardProps) => {
//   const { refs, id } = props;
//   useEffect(() => {
//     const ggbApp = new window.GGBApplet(
//       {
//         id: id,
//         appName: 'geometry',
//         width: 800,
//         height: 600,
//         showToolBar: true,
//         showAlgebraInput: true,
//         showMenuBar: true,
//         appletOnLoad: () => {
//           console.log('done loading');
//         },
//       },
//       true
//     );

//     window.addEventListener('load', function () {
//       ggbApp.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
//       ggbApp.inject(id);
//     });

//     return () => { };
//   }, []);

//   return <div id={id} ref={refs} />;
// };

// declare global {
//   interface Window {
//     GGBApplet: any
//   }
// }

const Board = (props: BoardProps) => {
  const { ref, id, width, height } = props;
  const [canDraw, setCanDraw] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctx: CanvasRenderingContext2D | null = canvasRef.current ? canvasRef.current.getContext('2d') : null;
  const offsetTop = canvasRef.current ? canvasRef.current.offsetTop : 0;
  const offsetLeft = canvasRef.current ? canvasRef.current.offsetLeft : 0;

  const startPosition = (event: any) => {
    setCanDraw(true);
    console.log('startPosition', `x ${event.clientX - offsetLeft}`, `y ${event.clientY - offsetTop}`);
  }

  const endPosition = (event: any) => {
    setCanDraw(false);
    if (ctx) {
      ctx.beginPath();
    }
    console.log('endPosition', `x ${event.clientX - offsetLeft}`, `y ${event.clientY - offsetTop}`);
  }

  const draw = (event: any) => {
    if (!canDraw) return;
    console.log(`x ${event.clientX}`, `y ${event.clientY}`)

    if (ctx) {
      ctx.lineWidth = 10;
      ctx.lineCap = 'round';
      ctx.lineTo(event.clientX - offsetLeft, event.clientY - offsetTop);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(event.clientX - offsetLeft, event.clientY - offsetTop);
    }
  }

  return (
    <canvas
      ref={canvasRef}
      style={{ border: '1px solid black', marginLeft: '10%', marginTop: '10%' }}
      id={id}
      width={width}
      height={height}
      onMouseDown={(e) => startPosition(e)}
      onMouseUp={(e) => endPosition(e)}
      onMouseMove={(e) => draw(e)} />
  )
}

interface BoardProps {
  ref: any,
  id: string,
  width: number,
  height: number,
}

Board.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight
}

export default Board;
