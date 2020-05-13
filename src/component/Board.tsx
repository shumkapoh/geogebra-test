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
  const { ref, id, width, height, canDrawLine } = props;
  const [canDraw, setCanDraw] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let ctx: CanvasRenderingContext2D | null;
  const offsetTop = canvasRef.current ? canvasRef.current.offsetTop : 0;
  const offsetLeft = canvasRef.current ? canvasRef.current.offsetLeft : 0;
  let mouseXPosition;
  let mouseYPosition;

  const drawGrid = () => {
    if (ctx) {
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'black';

      // Draw Horizontal line
      let yGrid = width / 10;
      while (yGrid < width) {
        ctx.beginPath();
        ctx.moveTo(0, yGrid);
        ctx.lineTo(width, yGrid);
        ctx.stroke();

        yGrid += width / 10;
      }

      // Draw Vertical line
      let xGrid = width / 10;
      while (xGrid < width) {
        ctx.beginPath();
        ctx.moveTo(xGrid, 0);
        ctx.lineTo(xGrid, height);
        ctx.stroke();

        xGrid += width / 10;
      }
    }
  }

  useEffect(() => {
    ctx = canvasRef.current ? canvasRef.current.getContext('2d') : null;

    drawGrid()
    return () => { }
  }, [drawGrid])



  const startPosition = (event: any) => {
    // setCanDraw(!canDraw);
    console.log('startPosition', `x ${event.clientX - offsetLeft}`, `y ${event.clientY - offsetTop}`);
    // console.log('startPosition', canDraw);
    console.log('canDrawLine', canDrawLine);
    mouseXPosition = event.clientX - offsetLeft;
    mouseYPosition = event.clientY - offsetTop;
    console.log('ctx', ctx)


    if (ctx) {
      ctx.lineWidth = 10;
      ctx.lineCap = 'round';
      if (canDrawLine) {
        ctx.lineTo(mouseXPosition, mouseYPosition);
        ctx.stroke();

      } else {
        ctx.beginPath();
        ctx.moveTo(mouseXPosition, mouseYPosition);
      }
    }
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

    mouseXPosition = event.clientX - offsetLeft;
    mouseYPosition = event.clientY - offsetTop;

    if (ctx) {
      ctx.lineWidth = 10;
      ctx.lineCap = 'round';
      ctx.lineTo(mouseXPosition, mouseYPosition);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(mouseXPosition, mouseYPosition);
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
    // onMouseUp={(e) => endPosition(e)}
    // onMouseMove={(e) => draw(e)}
    >
    </canvas>
  )
}

interface BoardProps {
  ref: any,
  id: string,
  width: number,
  height: number,
  canDrawLine: boolean,
}

Board.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight,
  canDrawLine: false,
}

export default Board;
