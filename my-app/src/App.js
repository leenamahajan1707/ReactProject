
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


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
    <Router>

     <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode = {toggleMode}/>
     <Alert alert ={alert}/>
     <div className="container my-3">
     <Switch>
          <Route path="/about">
            <About />
          </Route>
           <Route exact path="/">    {/*react will do exact matching with exact keyword otherwise it will do partial matching*/}
            <TextForm showAlert = {showAlert} heading="Enter the text to analyze below"  mode={mode}/>
          </Route>
      </Switch>
    </div>
    </Router>
    </>
    
  );
}

export default App;
