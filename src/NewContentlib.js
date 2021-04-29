import React, { useEffect, useState, useRef } from "react";
import { storageref } from "./firebase.js";
import { fabric } from "fabric";
import Image from "./Image.js";

function NewContentlib({ id, CanvasState }) {
  const [pics, SetPics] = useState(null);
  const [compType, SetCompTypes] = useState(id);
  const [isLoaded, SetLoaded] = useState(false)

  const setImg = () => {
    fabric.Image.fromURL(pics, (img) => {
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
        url = "Images";
        break;
      case 3:
        url = "Background Images";
        break;
      default:
        url = null;
    }
    if (url) {
        let urlArray = [];
        let listRef = storageref.child(url);
        let firstPage = listRef.listAll();
        firstPage.then((result) => {
          result.items.forEach((item) => {
            item.getDownloadURL().then((downloadURL) => {
              
              urlArray.push(downloadURL);
            });
          });
          SetPics(urlArray);
          SetLoaded(true);
        });
        
    } else {
      console.log("still working on it")
    }
  }, [isLoaded]);

  return (
    <div className="content-slide library " id="content">
      {/*<img src={pics} onClick={setImg}></img>*/}
      {pics ? pics.map(pic =>{
          return (
              <Image Src={pic} compType={compType}></Image>
          )
      }): null}
    </div>
  );
}

export default NewContentlib;
