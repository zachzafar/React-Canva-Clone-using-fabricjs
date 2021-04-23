import React, { useRef } from "react";

export const CanvasContext = React.createContext();

function CanvasProvider({ children }) {
  const canvasRef = useRef(null);

  return (
    <CanvasContext.Provider value={canvasRef}>
      {children}
    </CanvasContext.Provider>
  );
}

export default CanvasProvider; 
