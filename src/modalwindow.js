import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import './modalwindow.css'

function Modal() {
  return (
    <div className="shareModal"> 
    <div className="share-btn-container">
      <a href="#" class="facebook-btn">
        <FacebookIcon />
      </a>

      <a href="#" class="twitter-btn">
        <TwitterIcon />
      </a>

      <a href="#" class="pinterest-btn">
        <PinterestIcon />
      </a>
    </div>
    </div>
  );
}

export default Modal