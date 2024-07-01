import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { BsPlus } from "react-icons/bs";
import { LuMessageSquare } from "react-icons/lu";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <div className='menuWrap'>
          <IoMdMenu id='icon' className='menu' />
        </div>
        <div className="new-chat">
          <BsPlus id='icon'/>
          <p>새 채팅</p>
        </div>
        <div className="recent">
          <p className="recent-title">최근 대화</p>
          <div className="recent-entry">
            {/* { 이거 컴포넌트로 만들어야하는거 아님? } */}
            <LuMessageSquare id='icon'/>
            <p>안녕하세요</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-items">
          <AiOutlineQuestionCircle id='icon'/>
          <p>도움</p>
        </div>
        <div className="bottom-items">
          <IoIosSettings id='icon'/>
          <p>설정</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar