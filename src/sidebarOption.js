import React, { useState } from "react";

function SidebarOption({Icon,title,func1,func2,id}) {
    const [activeBtn, setActiveBtn] = useState(false)

    const setBtnState = () => {
        setActiveBtn(!activeBtn)
    }
  return (
    <div className="sidebar-element" onClick={() =>{
        func1();
        setBtnState();
        func2(id);
        }}>
      <Icon />
      <div className="">{title}</div>
    </div>
  );
}

export default SidebarOption;
