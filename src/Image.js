import React from "react";
import {fabric}from "fabric";


function Image({ src, compType, canvas }) {
  const AddImage = () => {
    let func;
    switch (compType) {
      case 3:
        func = () => {
          fabric.Image.fromURL(src, (img) => {
            img.scale(0.2);
            img.set({ left: 100, top: 100 });
            canvas.add(img);
          });
        };
        break;
      case 2:
        func = () => {
          fabric.Image.fromURL(src, (img) => {
            img.set({
              top: 0,
              left: 0,
              scaleY: canvas.height / img.height,
              scaleX: canvas.width / img.width,
            });
            canvas.add(img);
            canvas.renderAll();
          });
        };
        break;
      default:
        func = () => {
          console.log("work being done");
        };
        break;
    }
    func();
  };
  return (
    <div className="ImageContainer">
      <img src={src} onClick={AddImage} height="100px" width="140px"/>
    </div>
  );
}

export default Image;
