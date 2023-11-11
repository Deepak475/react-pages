import logo from './Assets/Images/NavodayaLogo.png';
import CodeWorking from './Assets/Images/CodeWorking.gif'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='left-column column'>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            I successfully deployed in Github Pages.
          </p>

        </div>
      </div>
      <div className='right-column column'>
        <div className='App-header'>
          <img src={CodeWorking} alt="Code Working" />
        </div>
      </div>
    </div>
  );
}

export default App;
