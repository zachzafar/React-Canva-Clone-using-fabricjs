import React, { useState, useEffect } from "react";

function SidebarOption({ Icon, title, id, setLibrary, ID }) {
  const [activeBtn, setActiveBtn] = useState(false);

  const setActive = () => {
    if (ID === id) {
      console.log("button set");
      setActiveBtn(!activeBtn);
    }
  };
  return (
    <div
      className={activeBtn ? "ActiveBtn" : "sidebar-element"}
      onClick={() => {
        setLibrary(id);
        setActive();
      }}
    >
      <Icon />
      <div className="">{title}</div>
    </div>
  );
}

export default SidebarOption;
