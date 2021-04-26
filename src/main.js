import React, { useState, useEffect, useContext } from "react";
import "./main.css";
import { fabric } from "fabric";
import { CanvasContext } from "./CanvaContext.js";

const Main = ({ setCanvasState }) => {
  const CanvasRef = useContext(CanvasContext);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    const fabricObj = initCanvas();
    setCanvas(fabricObj);
    setCanvasState(fabricObj);
  }, []);

  const initCanvas = () => new fabric.Canvas("c");

  return (
    <main>
      <div className="containcontainer">
        <div id="containcanvas">
          <canvas id="c" height="600px" width="800px" ref={CanvasRef}></canvas>
        </div>
      </div>
    </main>
  );
};

export default Main;
