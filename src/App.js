import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";




function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  // is a function that helps to display the alert messages
  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    // To show the alert for a particular time we have this function 
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
  }
  const toggleMode = (cls) => {
    removeBodyClasses();

    document.body.classList.add('bg-' + cls);
    // Suppose we added a class danger than after that we try to add another class than it will get ignored until another class has not been removed ,so to add a new class we should remove the old class first 

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils- Dark Mode"
      // setInterval(() => {
      //   document.title = "TextUtils is amazing "
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils now"
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils- Light Mode"

    }
  }
  return (
    <>
      <BrowserRouter>

        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Navbar title="TextUtils" about="AboutText" /> */}
        {/* <Navbar /> */}

        <div className="container my-3">
          {/* <TextForm showAlert={showAlert} setAlert={setAlert} heading="Enter Text To Analyze Below" mode={mode} /> */}
          <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} setAlert={setAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra spaces" mode={mode} />} />
            <Route path="about/*" element={<About mode={mode} />} />
          </Routes>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;


// mongodb+srv://samir8:Gyan%402021@newcluster.kjp9sxu.mongodb.net/test