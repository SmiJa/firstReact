import pic from'./ProfileImg.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="imgWrap">
        <img 
          src={pic}
          alt="profile" />
      </div>      
      <h2>Jason Smith</h2>
      <p>React Native Apprentice</p>
      <p>He/Him</p>
    </div>
  );
}

export default App;
