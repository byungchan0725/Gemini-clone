import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { BsPlus } from "react-icons/bs";
import { LuMessageSquare } from "react-icons/lu";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import './Sidebar.css';

const Sidebar = () => {

  const [extended, setExtended] = useState(true);

  const toggle = () => {
    setExtended(!extended);
  }

  return (
    <div className={`sidebar ${extended ? 'extended' : ''}`}>
      <div className="top">
        <div onClick={toggle} className='menuWrap'>
          <IoMdMenu id='icon' className='menu'/>
        </div>
        <div className="new-chat">
          <BsPlus id='icon'/>
          {extended && <p>새 채팅</p>}
        </div>
        {extended ? <div className="recent">
          <p className="recent-title">최근 대화</p>
          <div className="recent-entry">
            <LuMessageSquare id='icon'/>
            <p>안녕하세요</p>
          </div>
        </div> : null}
      </div>
      <div className="bottom">
        <div className="bottom-items">
          <AiOutlineQuestionCircle id='icon'/>
          {extended && <p>도움</p>}
        </div>
        <div className="bottom-items">
          <IoIosSettings id='icon'/>
          {extended && <p>설정</p>}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;