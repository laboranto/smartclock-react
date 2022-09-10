import './App.css';

function App() {
  return (
    <div>
    <div className="notify">
    <p>GPS 비활성화 됨</p>
    </div>
    <div className="clock">
      <h1>
      <span>00</span>:
      <span>00</span>:
      <span>00</span>
      </h1>
      <h3>
      <span>부산</span>은
      <span> 구름이 많으며 </span>
      기온은 <span>25도</span>
      </h3>
    </div>
    </div>
  );
}

function WeatherSymbol() {
  
}

function WeatherText() {

}

export default App;
