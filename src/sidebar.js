import React, { useState,useEffect } from "react";
import "./sidebar.css";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import ExtensionIcon from "@material-ui/icons/Extension";
import GifIcon from "@material-ui/icons/Gif";
import SidebarOption from "./sidebarOption.js";
import NewContentlib from "./NewContentlib.js"


function Sidebar({CanvasState}) {
  const [option, setOption] = useState(false);
  const [ID, setID] = useState(null);

  const optionSet = () => {
    setOption(!option);
  };
  const idSet = (id) => {
    setID(id);
  };

  const setLibrary = (id) => {
    if ( option === false && ID === null) {
      console.log("state set library")
        optionSet();
        idSet(id);
    } else if (id !== ID && option === true) {
      idSet(id);
      console.log("state set change library")
    } else if (id === ID && option === true) {
      optionSet();
      idSet(null)
      console.log("state set change close library")
    }
  };


  return (
    <aside className="sidebar-custom">
      <div className="sidebar-options">
        <SidebarOption
          id={1}
          Icon={TextFieldsIcon}
          setLibrary={setLibrary}
          ID={ID}
          title="Text"
        />
        <SidebarOption
          id={2}
          Icon={AddAPhotoIcon}
          setLibrary={setLibrary}
          ID={ID}
          title="Take Photo"
        />
        <SidebarOption
          id={3}
          Icon={PhotoLibraryIcon}
          setLibrary={setLibrary}
          ID={ID}
          title="Add Photo"
        />
        <SidebarOption
          id={4}
          Icon={CropOriginalIcon}
          setLibrary={setLibrary}
          ID={ID}
          title="Background"
        />
        <SidebarOption
          id={5}
          Icon={ExtensionIcon}
          setLibrary={setLibrary}
          ID={ID}
          title="Add elements"
        />
        <SidebarOption
         id={6}
         Icon={GifIcon}
         setLibrary={setLibrary} 
         ID={ID} 
         title="Gifs" 
         />
      </div>
      
      {option ? <NewContentlib CanvasState={CanvasState} id={ID}/> : null}
    </aside>
  );
}

export default Sidebar;