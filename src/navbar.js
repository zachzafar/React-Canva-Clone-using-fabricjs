import React, { useContext } from 'react';
import './navbar.css';
import ShareIcon from '@material-ui/icons/Share';
import GetAppIcon from '@material-ui/icons/GetApp';
import './main.js';
import {CanvasContext} from "./CanvaContext.js";

const Navbar = (props) => {
  const CanvasRef = useContext(CanvasContext)
  const download = () => {
    const canvas = CanvasRef.current;
    if (canvas !== null){
      const link = canvas.toDataURL();
      const a = document.createElement('a');
      a.href = link;
      a.download = "image.png";
      a.click();
    }
  }

  return (
    <nav className='navbar-custom'>
      <h3 style={{ flex: '1' }}> Welcome to Fabric</h3>
      <div className='space'></div>
      <ShareIcon id='downloadBtn' onClick={props.function} />
      <GetAppIcon id='shareBtn' onClick={download} />
      <div className='logInBtn'>
        <h3>Log In</h3>
      </div>
      <div className='Save'>
        <h3>Save</h3>
      </div>
    </nav>
  );
};
export default Navbar;
