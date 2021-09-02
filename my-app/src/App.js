
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light') //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null) //whether dark mode is enabled or not

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500)
  }

  const toggleMode =  () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode Has been enabled","success")
      document.title = 'TextUtils -Dark Mode';
    }
    else{     
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has been enabled","success")
      document.title = 'TextUtils -Light Mode';
    }

  }

  return (
    <>
     <Navbar title="TextUtils" aboutText="About US" mode={mode} toggleMode = {toggleMode}/>
     <Alert alert ={alert}/>
     <div className="container my-3">
      <TextForm showAlert = {showAlert} heading="Enter the text to analyze below"  mode={mode}/>
      {/* <About/> */}
    </div>
    </>
    
  );
}

export default App;
