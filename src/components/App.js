import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import About from "./About";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import Alert from "./Alert";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode applied', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode applied', 'success');
    }
  };

  return (
    // <Router>
      <div className='container my-3'>
        <Navbar title="textUtil" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Routes> */}
          {/* <Route path="/about" element={<About />} /> */}
        <TextForm showAlert={showAlert} heading="enter your text here" mode={mode} />
        {/* </Routes> */}
      </div>
    // </Router>
  );
}

export default App;
