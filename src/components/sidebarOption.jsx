import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';

function SidebarOption({ Icon, title, id, setLibrary, ID, option }) {
  const [activeBtn, setActiveBtn] = useState(false);

  if (ID === id) {
    if (activeBtn === false) {
      setActiveBtn(!activeBtn);
    } else if (option === false) {
      setActiveBtn(!activeBtn);
    }
  } else if (ID !== id) {
    if (activeBtn === true) {
      setActiveBtn(!activeBtn);
    }
  }
  return (
    <Button>
      <div
        className={activeBtn ? 'ActiveBtn' : 'sidebar-element'}
        onClick={() => {
          setLibrary(id);
        }}
      >
        <Icon />
        <div className=''>
          <h6>{title}</h6>
        </div>
      </div>
    </Button>
  );
}

export default SidebarOption;
