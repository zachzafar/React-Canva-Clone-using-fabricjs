import React, { useEffect, useState, useRef } from "react";
import { storageref } from "./firebase.js";
import { fabric } from "fabric";

function NewContentlib({ id, CanvasState }) {
  const [pics, SetPics] = useState(null);
  const imgRef = useRef(null);

  const setImg = () => {
    fabric.Image.fromURL(imgRef.src, (img) => {
      img.set({
        top: 0,
        left: 0,
        scaleY: CanvasState.height / img.height,
        scaleX: CanvasState.width / img.width,
      });
      CanvasState.add(img);
      CanvasState.renderAll();
    });
  };

  useEffect(() => {
    let url;
    switch (id) {
      case 2:
        url = "Images/newshoes.jpg";
        break;
      case 3:
        url = "Background Images/image001.png";
        break;
      default:
        url = null;
    }
    if (url) {
      storageref
        .child(url)
        .getDownloadURL()
        .then((result) => {
          console.log(result);
          SetPics(result);
        });
    } else {
      console.log("Yet to be worked on");
    }
  }, []);

  return (
    <div className="content-slide library " id="content">
      <img src={pics} ref={imgRef} onClick={setImg}></img>
    </div>
  );
}

export default NewContentlib;
