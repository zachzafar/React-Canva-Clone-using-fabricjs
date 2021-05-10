import React, { useState } from "react";
import Modal from "./modalwindow";
import Navbar from "./navbar.js";
import Sidebar from "./sidebar.js";
import Main from "./main.js";
import CanvasProvider from "./CanvaContext.js";

function MainPage() {
  const [modalState, setModalState] = useState(false);
  const [CanvasState, setCanvasState] = useState(null)
  const setModal = () => {
    setModalState(!modalState);
  };
  

  return (
    <CanvasProvider>
      <div>
        <div className={`${modalState ? "overlay" : null}`}>
          <Navbar
            function={setModal}
            state={modalState}
          />
          <div className="content-wrapper">
            <Sidebar CanvasState={CanvasState}/>
            <Main setCanvasState={setCanvasState} />
          </div>
        </div>
        {modalState ? <Modal escBtn={setModal}/> : null}
      </div>
    </CanvasProvider>
  );
}

export default MainPage;
