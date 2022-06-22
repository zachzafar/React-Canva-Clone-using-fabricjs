import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Image from './Image.jsx';
import '../css/ImageUploader.css';

function ImageUploader({ CanvasState }) {
  const [imageList, SetImageList] = useState([]);
  let condition;
  if (imageList !== []) {
    condition = true;
  } else if (imageList === []) {
    condition = false;
  }
  let Key = 0;

  const updateList = (event) => {
    let newArray = [];
    if (imageList !== []) {
      newArray.push(...imageList);
    }
    if (event.target.files) {
      let img = event.target.files[0];
      newArray.push(URL.createObjectURL(img));
      SetImageList(newArray);
    }
  };

  const updateImage = () => {
    document.getElementById('button').click();
  };

  return (
    <div className='content-slide library' id='content'>
      <input type='file' id='button' hidden onChange={updateList} />
      <div className='Upload_image'>
        <Button onClick={updateImage}>Upload Image</Button>
      </div>
      {condition
        ? imageList.map((img) => {
            Key++;
            return (
              <Image key={Key} url={img} compType={3} canvas={CanvasState} />
            );
          })
        : null}
    </div>
  );
}

export default ImageUploader;
