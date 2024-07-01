import React, { useContext } from 'react';
import { FaRegFilePdf, FaSearch, FaImage } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import './Main.css';
import { Context } from '../../context/Context';

function Main() {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

  const handleSend = () => {
    // input 값이 있을 때만 onSent 호출
    if (input.trim()) {
      onSent(input);
    }
  };

  return (
    <div className='main'>
      <div className="nav">
        <p>AI Bridge</p>
      </div>
      <div className='main-container'>
        {!showResult ? (
          <>
            <div className='greet'>
              <p><span>안녕하세요</span></p>
              <p>무엇을 도와드릴까요?</p>
            </div>
            <div className='cards'>
              <div className="card">
                <span>PDF 활용하기</span>
                <p>PDF를 업로드하고 PDF에 맞는 모델을 만들어보세요.</p>
                <FaRegFilePdf id='card-icon' />
              </div>
              <div className="card">
                <span>이미지 활용하기</span>
                <p>추억을 재밌게 바꿔볼까요?</p>
                <FaImage id='card-icon' />
              </div>
              <div className="card">
                <span>이미지 정보찾기</span>
                <p>이미지에 대한 정보를 찾아줄게요.</p>
                <FaSearch id='card-icon' />
              </div>
              <div className="card">
                <span>소설 생성</span>
                <p>흥미로운 이야기가 기다리고 있을걸요?</p>
                <FaSearch id='card-icon' />
              </div>
            </div>
          </>
        ) : (
          <div>
            <div className='result'>
              <div className="result-title">
                <p>{recentPrompt}</p>
              </div>
              <div className='result-data'>
                <p>{resultData}</p> 
              </div>
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='여기에 입력해주세요' />
            <div>
              <FaImage id='bottom-icon' />
              <IoMdSend onClick={handleSend} id='bottom-icon' />
            </div>
          </div>
          <p className='bottom-info'>
            Gemini UI 로 내가 만든 모델 테스트 해보기
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;