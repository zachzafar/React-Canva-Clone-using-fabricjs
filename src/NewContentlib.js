import React, { useEffect, useState, useRef } from "react";
import { storageref } from "./firebase.js";
import { fabric } from "fabric";
import Image from "./Image.js";

function NewContentlib({ id, CanvasState }) {
  const [pics, SetPics] = useState([]);
  const [compType, SetCompTypes] = useState(id);
  const [isLoaded, setLoaded] = useState(false);

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

      // result.items.forEach((item) => {
      //   item.getDownloadURL().then((downloadURL) => {
      //     urlArray.push(downloadURL);
      //   });
      // });

      // SetPics(urlArray);
    } else {
      console.log("still working on it");
    }
  };

  return (
    <div className="content-slide library " id="content">
      {/*<img src={pics} onClick={setImg}></img>*/}
      {pics.map((pic) => {
        console.log(pic);
        return <Image src={pic} compType={compType} />;
      })}
    </div>
  );
}

export default NewContentlib;
