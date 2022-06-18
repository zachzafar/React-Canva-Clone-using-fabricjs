import React from "react";
import "../css/fonts.css";
import "../css/Textbox.css";
import { fabric } from "fabric";

function TextBox({ CanvasState }) {
  const canvas = CanvasState;
  const addText = (event) => {
    let txtbox = new fabric.Textbox(event.target.innerHTML, {
      left: 50,
      top: 50,
      width: 150,
      fontSize: 20,
    });
    canvas.add(txtbox).setActiveObject(txtbox);
    canvas.getActiveObject().set("fontFamily", event.target.innerHTML);
    canvas.requestRenderAll();
  };

  return (
    <div className="content-slide library " id="content">
      <div className="text" onClick={addText}>
        <h3>Golden Garden</h3>
      </div>
    </div>
  );
}

export default TextBox;
