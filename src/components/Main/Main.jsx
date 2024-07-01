import React from 'react'
import { FaRegFilePdf } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import './Main.css';

function Main() {
  return (
    <div className='main'>
      <div className="nav">
        <p>AI Bridge</p>
      </div>
      <div className='main-container'>
        <div className='greet'>
          <p><span>안녕하세요</span></p>
          <p>무엇을 도와드릴까요?</p>
        </div>
        <div className='cards'>
          <div className="card">
            <span>PDF 활용하기</span>
            <p>PDF를 업로드하고 PDF에 맞는 모델을 만들어보세요.</p>
            <FaRegFilePdf id='card-icon'/>
          </div>
          <div className="card">
            <span>이미지 활용하기</span>
            <p>추억을 재밌게 바꿔볼까요?</p>
            <CiImageOn id='card-icon'/>
          </div>
          <div className="card">
            <span>이미지 정보찾기</span>
            <p>이미지에 대한 정보를 찾아줄게요.</p>
            <FaSearch id='card-icon'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main