import React, { useRef, useState } from "react";
import "./App.css";
import Navbar from "./navbar.js";
import Sidebar from "./sidebar.js";
import Main from "./main.js";
import Modal from "./modalwindow";

function App() {
  const [modalState, setModalSate] = useState(false);
  const canvasRef = useRef(null);
  const setModal = () => {
    setModalSate(!modalState);
  };


  return (
    <div className="App">
      <div className={`${modalState ? "overlay" : null}`}>
        <Navbar canvasRef={canvasRef} function={setModal} state={modalState} />
        <div className="content-wrapper">
          <Sidebar canvasRef={canvasRef} />
          <Main canvasRef={canvasRef}  />
        </div>
      </div>
      {modalState ? <Modal /> : null}
    </div>
  );
}

export default App;
