import React, { useEffect, useState } from "react";
import { storageref } from "../func/firebase.js";
import Images from "./Image.jsx";
import "../css/NewContentlib.css";

function NewContentlib({ id, CanvasState }) {
  const [pics, SetPics] = useState([]);
  const [compType, SetCompTypes] = useState(null);

  let Key = 0;

  useEffect(() => {
    if (id !== compType) {
      SetCompTypes(id);
      loadImages();
    }
  }, [id]);

  const loadImages = async () => {
    let url;
    switch (id) {
      case 3:
        url = "Images";
        break;
      case 4:
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
      });
    } else {
      console.log("still working on it");
    }
  };

  return (
    <div className="content-slide library " id="content">
      {pics.map((pic) => {
        console.log(pic);
        Key++;

        return (
          <Images
            key={Key}
            url={pic}
            compType={compType}
            canvas={CanvasState}
          />
        );
      })}
    </div>
  );
}

export default NewContentlib;
