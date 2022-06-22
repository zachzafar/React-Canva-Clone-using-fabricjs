import React, { useState } from 'react';
import Modal from './Modalwindow';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import CanvasScreen from './CanvasScreen.jsx';
import CanvasProvider from '../func/CanvaContext.js';

function MainPage() {
  const [modalState, setModalState] = useState(false);
  const [CanvasState, setCanvasState] = useState(null);
  const setModal = () => {
    setModalState(!modalState);
  };

  return (
    <CanvasProvider>
      <div>
        <div className={`${modalState ? 'overlay' : null}`}>
          <Navbar function={setModal} state={modalState} />
          <div className='content-wrapper'>
            <Sidebar CanvasState={CanvasState} />
            <CanvasScreen setCanvasState={setCanvasState} />
          </div>
        </div>
        {modalState ? <Modal escBtn={setModal} /> : null}
      </div>
    </CanvasProvider>
  );
}

export default MainPage;
