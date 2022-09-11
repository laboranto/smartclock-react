import React, {useState} from 'react';
import './App.css';

function App() {
  /* 시계 영역 */
  const [time,setTime] = useState('00:00:00');

  const currentTime = () => {
    const date = new Date();
    const hrs = String(date.getHours()).padStart(2,'0');
    const min = String(date.getMinutes()).padStart(2,'0');
    const sec = String(date.getSeconds()).padStart(2,'0');
    setTime(`${hrs}:${min}:${sec}`)
  }

  const continueTime = () => {
    setInterval(currentTime,1000);
  }

  continueTime();

  /* 날씨 영역 */
  const city = '부산';
  const sky = '맑으며';
  const temp = '28';

  return (
    <div className="app">
    <div className="notify">
    <p>🌏 GPS 연결 중</p>
    </div>
    <div className="sky-icon">
    <img src="icons/01d.svg"/>
    </div>
    <div className="clock">
      <h1>
      {time}
      </h1>
      <p>
      현재 {city}의 날씨는 {sky}, 기온은 섭씨 {temp}도입니다.
      </p>
    </div>
    <NewsCast></NewsCast>
    </div>
  );
}

function NewsCast(){
return(
  <div className="newsWrap">
    <div className="news">
    <h3>헤드라인</h3>
    <p>내용</p>
    </div>
  </div>
)
}

export default App;
