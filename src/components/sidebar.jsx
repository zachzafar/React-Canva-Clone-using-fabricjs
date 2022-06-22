import React, { useState } from 'react';
import '../css/sidebar.css';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import ExtensionIcon from '@material-ui/icons/Extension';
import SidebarOption from './SidebarOption.jsx';
import NewContentlib from './NewContentlib.jsx';
import ImageUploader from './ImageUploader.jsx';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import Textbox from './TextBox.jsx';

function Sidebar({ CanvasState }) {
  const [option, setOption] = useState(false);
  const [ID, setID] = useState(null);
  const optionSet = () => {
    setOption(!option);
  };
  const idSet = (id) => {
    setID(id);
  };

  const setLibrary = (id) => {
    if (option === false && ID === null) {
      console.log('state set library');
      optionSet();
      idSet(id);
    } else if (id !== ID && option === true) {
      idSet(id);
      console.log('state set change library');
    } else if (id === ID && option === true) {
      optionSet();
      idSet(null);
      console.log('state set change close library');
    }
  };
  let content;
  if (ID === 1) {
    content = <Textbox CanvasState={CanvasState} />;
  } else if (ID === 2) {
    content = <ImageUploader CanvasState={CanvasState} />;
  } else if (ID === 3 || ID === 4) {
    content = <NewContentlib CanvasState={CanvasState} id={ID} />;
  }

  return (
    <aside className='sidebar-custom'>
      <div className='flex flex-col pl-2 h-auto bg-gray-900'>
        <SidebarOption
          id={1}
          Icon={TextFieldsIcon}
          setLibrary={setLibrary}
          ID={ID}
          option={option}
          title='Text'
        />
        <SidebarOption
          id={2}
          Icon={AddAPhotoIcon}
          setLibrary={setLibrary}
          ID={ID}
          option={option}
          title='Upload Photo'
        />
        <SidebarOption
          id={3}
          Icon={PhotoLibraryIcon}
          setLibrary={setLibrary}
          ID={ID}
          option={option}
          title='Add Photo'
        />
        <SidebarOption
          id={4}
          Icon={CropOriginalIcon}
          setLibrary={setLibrary}
          ID={ID}
          option={option}
          title='Background'
        />
        <SidebarOption
          id={5}
          Icon={ExtensionIcon}
          setLibrary={setLibrary}
          ID={ID}
          option={option}
          title='Add elements'
        />
        <SidebarOption
          id={6}
          Icon={ViewQuiltIcon}
          setLibrary={setLibrary}
          ID={ID}
          option={option}
          title='Templates'
        />
      </div>

      {option ? content : null}
    </aside>
  );
}

export default Sidebar;
