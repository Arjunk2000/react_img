import "./App.css";
import images from "./images/download.png";

function App() {
  return (
    <div className="main">
      <div>
        <p id="para">The Evolution of Airbnb`s Frontend</p>
      </div>

      <div className="space">@spikebrehm</div>

      <div>
        <img src={images} className="img" />
      </div>
    </div>
  );
}

export default App;
