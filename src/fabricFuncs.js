document.querySelectorAll(".fonts").forEach((font) => {
    font.addEventListener("click", () => {
      console.log("button clicked");
      var textbox = new fabric.Textbox(" ", {
        left: 50,
        top: 50,
        width: 150,
        fontSize: 20,
        fontStyle: "white",
      });
      canvas.add(textbox).setActiveObject(textbox);
      loadAndUse(font.innerHTML);
      textbox.addEventListener("click", () => {
        window.addEventListener("keydown", (e) => {
          console.log("click happened on text box");
        });
      });
      textbox.addEventListener("dblclick", () => {
        console.log("dblclick happened");
        if (e.key === "Delete" || e.key === "Backspace") {
          canvas.remove(canvas.getActiveObject());
        }
      });
    });
  });

  (el) => {
    el.addEventListener("click", () => {
      fabric.Image.fromURL(el.src, (img) => {
        img.set({
          top: 0,
          left: 0,
          scaleY: canvas.height / img.height,
          scaleX: canvas.width / img.width,
        });
        canvas.add(img);
        canvas.renderAll();
        /*
        canvas.backgroundImage = img;
        canvas.renderAll();
        */
      });
    });
  }


  document.querySelectorAll(".library img").forEach((el) => {
    el.addEventListener("click", () => {
      fabric.Image.fromURL(el.src, (img) => {
        img.scale(0.2);
        img.set({ left: 100, top: 100 });
        canvas.add(img);
      });
    });
  });


  window.addEventListener("keydown", (e) => {
    if (e.key === "Delete" || e.key === "Backspace") {
      canvas.remove(canvas.getActiveObject());
    }
  });