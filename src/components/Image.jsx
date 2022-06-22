import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';

function Images({ url, compType, canvas }) {
  const [pic, SetPic] = useState(null);

  useEffect(() => {
    SetPic(url);
  }, [url]);

  const AddImage = () => {
    /*let image = new Image()
    image.src = pic
    image.crossOrigin = "anonymous";*/
    let func;
    switch (compType) {
      case 3:
        func = () => {
          fabric.Image.fromURL(url, (img) => {
            img.scale(0.2);
            img.set({ left: 100, top: 100 });
            canvas.add(img);
            canvas.renderAll();
          });
          /* let imageInstance = new fabric.Image(image, {
            left: 100,
            top: 100, 
          });
          canvas.add(imageInstance);*/
        };
        break;
      case 4:
        func = () => {
          fabric.Image.fromURL(url, (img) => {
            img.set({
              top: 0,
              left: 0,
              scaleY: canvas.height / img.height,
              scaleX: canvas.width / img.width,
            });
            canvas.setBackgroundImage(img);
            canvas.renderAll();
          });
        };
        break;
      default:
        func = () => {
          console.log('work being done');
        };
        break;
    }
    func();
  };
  return (
    <div className='ImageContainer'>
      <img src={pic} onClick={AddImage} height='100px' width='140px' />
    </div>
  );
}

export default Images;
