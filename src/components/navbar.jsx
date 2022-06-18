import React, { useContext } from "react";
import "../css/navbar.css";
import ShareIcon from "@material-ui/icons/Share";
import GetAppIcon from "@material-ui/icons/GetApp";
//import "/main.js";
import { CanvasContext } from "../func/CanvaContext.js";
import { Button } from "@material-ui/core";

const Navbar = (props) => {
  const CanvasRef = useContext(CanvasContext);
  const download = () => {
    const canvas = CanvasRef.current;
    if (canvas !== null) {
      const a = document.createElement("a");
      const link = canvas.toDataURL();
      a.href = link;
      a.download = "image.png";
      a.click();
    }
  };

  return (
    <nav className="navbar-custom">
      <h3 style={{ flex: "1" }}> Welcome to Fabric</h3>
      <div className="space"></div>
      <Button>
        <ShareIcon id="downloadBtn" onClick={props.function} />
      </Button>
      <Button>
        <GetAppIcon id="shareBtn" onClick={download} />
      </Button>
      <div className="Save">
        <Button>
          <h3>Publish</h3>
        </Button>
      </div>
    </nav>
  );
};
export default Navbar;
