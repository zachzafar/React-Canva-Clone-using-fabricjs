import React, { useState, useEffect, useContext } from "react";
import "./main.css";
import { fabric } from "fabric";
import { CanvasContext } from "./CanvaContext.js";

const Main = ({ setCanvasState }) => {
  const CanvasRef = useContext(CanvasContext);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    const initCanvas = () => new fabric.Canvas("c");
    const fabricObj = initCanvas();
    setCanvas(fabricObj);
    setCanvasState(fabricObj);
    
    const HandleKeydown = (event) => {
      console.log(event);
      if (event.key === "Delete" || event.key === "Backspace") {
        fabricObj.remove(fabricObj.getActiveObject());
      }
    };
    window.addEventListener("keydown", HandleKeydown);

    return () => {
      window.removeEventListener("keydown", HandleKeydown);
    };
  }, []);

  
  return (
    <main>
      <div className="containcontainer" >
        <div id="containcanvas">
          <canvas id="c" height="600px" width="800px" ref={CanvasRef}></canvas>
        </div>
      </div>
    </main>
  );
};

export default Main;
