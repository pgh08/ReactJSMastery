// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  // Only one tag can be returned below.
  // If we want to return multiple tags enclose it with JSX fragment using empty tags <>...</>
  // let myName = "Prajwal";

  const [mode,setMode] = useState('light');
  const [txtMode,setTxtMode] = useState('dark');
  const [toggleTxt,changeTxt] = useState('Enable Dark Mode');
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    },1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      setTxtMode('light');
      changeTxt('Disable Dark Mode');
      document.body.style.backgroundColor = '#110121';
      document.body.style.color = 'white';
      showAlert("Darks mode has been enabled","success");
    }
    else{
      setMode('light');
      setTxtMode('dark');
      changeTxt('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled","success");
    }
  }

  return (
    // <>
    // <h1>This is Prajwal</h1>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React Fast
    //     </a>
    //   </header>
    // </div>
    // </> 
    <>
      {/* // Importing from custom components */}
      {/* <Navbar title="TextUtils2" aboutText="About TextUtils"/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} txtMode={txtMode} toggleTxt={toggleTxt} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path='/about' Component={About} /> 
          <Route exact path='/' element={<Textform showAlert={showAlert} heading="Enter your text below"/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
