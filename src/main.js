import React, { useState, useEffect } from 'react';
import './main.css';
import { fabric } from 'fabric';

const Main = (props) => {
  const [canvas, setCanvas] = useState('');

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  const initCanvas = () => new fabric.Canvas('c');

  return (
    <main >
      <div className='containcontainer'>
        <div id='containcanvas'>
          <canvas id='c' height='600px' width='400px' ref={props.canvasRef}></canvas>
        </div>
      </div>
    </main>
  );
}

export default Main;