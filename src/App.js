import React, {useState} from 'react'
import Navbar from './components.js/Navbar';
import Alert from './components.js/Alert';
import TextForm from './components.js/TextForm';
import About from './components.js/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
 const [mode, setMode] = useState('light')
 const [alert, setAlert] = useState(null)
 const showAlert=(message,type)=>{
setAlert({
 message: message,
 type: type
})
setTimeout(()=>{
  setAlert(null)
},1500)
 }
  const controlMode=()=>{
    if (mode=== 'light'){
    setMode('dark')
    document.body.style.backgroundColor= '#040a3c';
    showAlert('Dark Mode Is Enabled', 'Success')
  }
  else{
    setMode('light')
    document.body.style.backgroundColor= 'white';
    showAlert('Light Mode Is Enabled', 'Success')
  }
  }
  return (
    <>
    <Router>
    <Navbar mode={mode} controlMode={controlMode}/>
      <Alert alert={alert}/>
      <div className='container my-2'>
        <Routes>
          <Route path="/about" element={<About mode={mode}/>} >
          </Route>
          <Route path="/" element={ <TextForm mode={mode} showAlert={showAlert}/> }>
          </Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
