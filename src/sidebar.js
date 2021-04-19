import React, { useState } from "react";
import "./sidebar.css";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import ExtensionIcon from "@material-ui/icons/Extension";
import GifIcon from "@material-ui/icons/Gif";
import SidebarOption from "./sidebarOption.js";
import Content from "./contentlib.js";

function Sidebar() {
  const [option, setOption] = useState(false);
  const [ID, setID] = useState(null);

  const optionSet = () => {
    setOption(!option);
  };
  const idSet = (id) => {
    setID(id);
  };

  return (
    <aside className="sidebar-custom">
      <div className="sidebar-options">
        <SidebarOption
          id={1}
          Icon={TextFieldsIcon}
          func1={optionSet}
          func2={idSet}
          title="Text"
        />
        <SidebarOption
          id={2}
          Icon={AddAPhotoIcon}
          func1={optionSet}
          func2={idSet}
          title="Take Photo"
        />
        <SidebarOption
          id={3}
          Icon={PhotoLibraryIcon}
          func1={optionSet}
          func2={idSet}
          title="Add Photo"
        />
        <SidebarOption
          id={4}
          Icon={CropOriginalIcon}
          func1={optionSet}
          func2={idSet}
          title="Background"
        />
        <SidebarOption
          id={5}
          Icon={ExtensionIcon}
          func1={optionSet}
          func2={idSet}
          title="Add elements"
        />
        <SidebarOption id={6} Icon={GifIcon} func1={optionSet} func2={idSet}title="Gifs" />
      </div>
      {option ? <Content id={ID} /> : null}
    </aside>
  );
}

export default Sidebar;

/*
 
*/
