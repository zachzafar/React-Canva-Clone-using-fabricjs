import React, { useEffect, useState, useRef } from "react";
import { storageref } from "./firebase.js";
import { fabric } from "fabric";
import Image from "./Image.js";
import "./NewContentlib.css";

function NewContentlib({ id, CanvasState }) {
  const [pics, SetPics] = useState([]);
  const [compType, SetCompTypes] = useState(id);
  const [isLoaded, setLoaded] = useState(false);
  let Key = 0

  useEffect(() => {
    if (!isLoaded) {
      loadImages();
    }
  }, [isLoaded]);

  const loadImages = async () => {
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
      let listRef = storageref.child(url);

      const result = await listRef.listAll();
      const promises = result.items.map((item) => item.getDownloadURL());
      Promise.all(promises).then((urlArray) => {
        SetPics(urlArray);
        setLoaded(true);
      });

    } else {
      console.log("still working on it");
    }
  };

  return (
    <div className="content-slide library " id="content">
      {pics.map((pic) => {
        console.log(pic);
        Key++
        return <Image key={Key}src={pic} compType={compType} canvas={CanvasState} />;
      })}
    </div>
  );
}

export default NewContentlib;
