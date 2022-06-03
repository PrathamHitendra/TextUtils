 
import { useState } from 'react';
import './App.css';
import Alert from './Component/Alert';
// import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
// import {
//   BrowserRouter ,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 600);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743'
      showalert("Dark mode has been enable", "success")
      document.title = "TextUtlis-Dark Mode"
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showalert("Light  mode has been enable", "success")
      document.title = "TextUtlis-Home"
    }
  }

  return (
     <>
      {/* <BrowserRouter> */}
        {/* <Navbar  title="textutils" aboutText="aboutTextutils" /> */}
        {/* <Navbar/> */}
        <Navbar title="textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route path="About"  element={<About />} />
            <Route path="TextForm" element={<TextForm showalert={showalert} heading="Enter The Text For Analyze" mode={mode} />}/>
          </Routes> */}
          {/* <About /> */}
        <TextForm showalert={showalert} heading="Enter The Text For Analyze" mode={mode} />
        </div>
      {/* </BrowserRouter> */}
    </>
    )

}

export default App;
