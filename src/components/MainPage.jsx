import React, { useState } from "react";
import Modal from "./modalwindow";
import Navbar from "./navbar.jsx";
import Sidebar from "./sidebar.jsx";
import Main from "./main.jsx";
import CanvasProvider from "../func/CanvaContext.js";

function MainPage() {
  const [modalState, setModalState] = useState(false);
  const [CanvasState, setCanvasState] = useState(null);
  const setModal = () => {
    setModalState(!modalState);
  };

  return (
    <CanvasProvider>
      <div>
        <div className={`${modalState ? "overlay" : null}`}>
          <Navbar function={setModal} state={modalState} />
          <div className="content-wrapper">
            <Sidebar CanvasState={CanvasState} />
            <Main setCanvasState={setCanvasState} />
          </div>
        </div>
        {modalState ? <Modal escBtn={setModal} /> : null}
      </div>
    </CanvasProvider>
  );
}

export default MainPage;
