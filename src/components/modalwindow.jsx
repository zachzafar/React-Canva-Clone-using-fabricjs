import React, { useEffect } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import '../css/modalwindow.css';

function Modal({ escBtn }) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        escBtn();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div className='shareModal'>
      <div className='share-btn-container'>
        <a href='#' className='facebook-btn'>
          <FacebookIcon />
        </a>

        <a href='#' className='twitter-btn'>
          <TwitterIcon />
        </a>

        <a href='#' className='pinterest-btn'>
          <PinterestIcon />
        </a>
      </div>
    </div>
  );
}

export default Modal;
