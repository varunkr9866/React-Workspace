import { useState } from "react";
import "./App.css";
// import About from "./components/About.js";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert.jsx";

function App() {
  const [mode, setMode] = useState('light');
   const [alert,setAlert] = useState(null);
   const showAlert = (message,type)=>{
      setAlert({
        msg:message,
        type:type
      }
      )
   }
   const toggleMode = ()=>{
   if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor ='grey';
    setAlert('Dark mode has been Enabled','success');
   } else {
    setMode('light');
    document.body.style.backgroundColor ='light';
     setAlert('Light mode has been Enabled','success');
   }
    }
  let name = "Varun Reddy";
  return (
    <>
      <Navbar title = "TextUtils" aboutText = "About" mode ={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container">
        <TextForm  heading = 'Enter the Text to anlyize Below' mode ={mode} />
        {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
